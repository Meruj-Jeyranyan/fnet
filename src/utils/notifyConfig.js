import { toast } from "react-toastify";

const config = {
  // position: toast.POSITION.TOP_CENTER,
  // position: "top-center",
  closeButton: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  pauseOnFocusLoss: false,
  hideProgressBar: false,
  newestOnTop: true,
  progress: undefined,
  theme: "light",
};

export const notify = (message, type, autoCloseDuration = 3500) => {
  toast[type](message, {
    ...config,
    autoClose: autoCloseDuration,
  });
};

export const notifySuccess = (message, autoCloseDuration) => {
  notify(message, "success", autoCloseDuration);
};

export const notifyError = (message, autoCloseDuration) => {
  notify(message, "error", autoCloseDuration);
};

export const notifyErrorServer = (message, autoCloseDuration) => {
  notify(message, "error", autoCloseDuration);
};

export const notifyWarning = (message, autoCloseDuration) => {
  notify(message, "warning", autoCloseDuration);
};

export const notifyText = (message, autoCloseDuration) => {
  notify(message, "toast", autoCloseDuration);
};
