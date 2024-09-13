import dayjs from "dayjs";

const DATE_FORMAT = "DD/MM/YYYY";
const DATE_TIME_FORMAT = `${DATE_FORMAT} HH:mm`;
const BACKEND_DATE_FORMAT = "YYYY-MM-DD";

/**
 * Formats a date and time.
 * @param {string|Date} date - The date to format.
 * @param {boolean} forBack - Whether to format for the backend (YYYY-MM-DD).
 * @param {boolean} withTime - Whether to include the time in the formatted result.
 * @param {string} customDateFormat - Custom date format (optional).
 * @returns {string} The formatted date and time.
 */
export const formatDateTime = (date, forBack = false, withTime = false, customDateFormat) => {
  if (!date) {
    return "-- --";
  }

  let formatString;

  if (customDateFormat) {
    formatString = customDateFormat;
  } else {
    formatString = forBack ? BACKEND_DATE_FORMAT : withTime ? DATE_TIME_FORMAT : DATE_FORMAT;
  }

  try {
    return dayjs(date).format(formatString);
  } catch (error) {
    return "-- --";
  }
};
