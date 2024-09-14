export const registerUser = createAsyncThunk(
  "auth/register",
  async ({ first_name, last_name, email, password }, { rejectWithValue }) => {
    try {
      await ApiClient.post("/v1/user/register", {
        first_name,
        last_name,
        email,
        password,
      });
      return { success: true };
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await ApiClient.post("/v1/user/login", {
        email,
        password,
      });
      if (data?.access_token && data.refresh_token) {
        setAccessToken(data.access_token);
        setRefreshToken(data.refresh_token);
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgot",
  async (email, { rejectWithValue }) => {
    try {
      await ApiClient.post("/v1/user/password/forgot", {
        email: email,
      });
      return { success: true };
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
