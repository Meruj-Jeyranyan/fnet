import axios from "axios";
import { notifyError } from "utils/notifyConfig";
import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
  getRefreshToken,
  removeRefreshToken,
} from "./TokenService";

let logoutInitiated = false;

// Error Handling Classes
// AppError: Extends the built-in Error class and captures the stack trace. It sets the error name to the name of the specific error class.
class AppError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

//ApiError: Extends the AppError class and represents errors specific to API operations. It adds a status property to indicate the HTTP status code of the error
class ApiError extends AppError {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_BASE_URL_LOCAL
    : process.env.REACT_APP_BASE_URL_SERVER;

const client = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

client.interceptors.request.use((config) => {
  const accessToken = getAccessToken();
  if (accessToken) {
    config.headers["Authorization"] = `Bearer ${accessToken}`;
  }
  return config;
});

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const status = error.response ? error.response.status : null;
    const message = error.response ? error.response.data?.error?.text : null;
    const originalRequest = error.config;

    if (status === 401) {
      if (message === "Access token expired" && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshToken = getRefreshToken();
          const response = await client.post("/token/refresh", {
            refresh_token: refreshToken,
          });
          const { access_token } = response.data;
          setAccessToken(access_token);
          originalRequest.headers["Authorization"] = `Bearer ${access_token}`;
          return client(originalRequest);
        } catch (error) {
          removeAccessToken();
          removeRefreshToken();
          throw new ApiError("Failed to refresh access token", 401);
        }
      } else {
        if (message === "Refresh Token Expired") {
          if (!logoutInitiated) {
            logoutInitiated = true;
            notifyError("Session expired. Please log in again.");

            removeAccessToken();
            removeRefreshToken();
            window.location.replace("/login");
          }
        }
        throw new ApiError(message || "Authentication error", status);
      }
    } else if (status === 404) {
      throw new ApiError(message || "Resource not found", 404);
    } else if (status === 500) {
      throw new ApiError(message || "Internal Server Error", 500);
    } else {
      throw new ApiError(message || "An unexpected error occurred", status || 500);
    }
  }
);

const request = async (options, customClient = null) => {
  const axiosInstance = customClient || client;
  try {
    const response = await axiosInstance(options);
    return response.data;
  } catch (error) {
    if (error.response) {
      const { data, status } = error.response;
      throw new Error(`${status}: ${data?.error?.text || "Unknown Error"}`);
    }
    throw error;
  }
};

const get = async (url, options = {}, customClient = null) => {
  return request(
    {
      method: "GET",
      url,
      ...options,
    },
    customClient
  );
};

const post = async (url, data, headers = {}, options = {}, customClient = null) => {
  const requestHeaders = {
    "Content-type": "application/json",
    ...headers,
  };

  return request(
    {
      method: "POST",
      url,
      data,
      headers: requestHeaders,
      ...options,
    },
    customClient
  );
};

const patch = async (url, data, options = {}, customClient = null) => {
  return request(
    {
      method: "PATCH",
      url,
      data,
      ...options,
    },
    customClient
  );
};

const put = async (url, data, options = {}, customClient = null) => {
  return request(
    {
      method: "PUT",
      url,
      data,
      ...options,
    },
    customClient
  );
};

const del = async (url, options = {}, customClient = null) => {
  return request(
    {
      method: "DELETE",
      url,
      ...options,
    },
    customClient
  );
};

const ApiClient = {
  ApiError,
  get,
  post,
  patch,
  put,
  del,
};

export default ApiClient;
