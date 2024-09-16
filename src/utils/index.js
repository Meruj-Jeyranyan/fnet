/**
 * Checks if a variable is an object.
 * @param {*} variable - The variable to check.
 * @returns {boolean} - Returns true if the variable is an object, false otherwise.
 */
export const isObject = (variable) => {
  return (
    typeof variable === "object" &&
    variable !== null &&
    !Array.isArray(variable)
  );
};

/**
 * Checks if an object is empty (has no properties).
 * @param {*} value - The object to check.
 * @returns {boolean} - Returns true if the object is empty, false otherwise.
 */
export const isObjectEmpty = (value) => {
  return (
    isObject(value) &&
    Object.keys(value).length === 0 &&
    value.constructor === Object
  );
};

/**
 * Capitalizes the first letter of a string.
 * @param {string} word - The string to capitalize.
 * @returns {string} - Returns the capitalized string.
 */
export const capitalizeFirstLetter = (word) => {
  if (typeof word !== "string" || word.length === 0) {
    return word;
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
};

/**
 * Generates an array of options with 'value' and 'label' properties from the input.
 * @param {Array} options - Array of options. Each option can be a string or an object.
 * @param {string} valueKey - The key to be used for the 'value' property in case of objects.
 * @param {string} labelKey - The key to be used for the 'label' property in case of objects.
 * @param {object} defaultOption - An optional default option to be included in the result.
 * @returns {Array} An array of objects with 'value' and 'label' properties.
 */
export const generateOptions = (
  options,
  defaultOption = null,
  valueKey = "value",
  labelKey = "label"
) => {
  if (!Array.isArray(options)) {
    return [];
  }

  const optionArray = options
    .map((option) => {
      if (typeof option === "string") {
        return {
          value: option,
          label: capitalizeFirstLetter(option.trim()),
        };
      } else if (isObject(option) && !isObjectEmpty(option)) {
        return {
          value: option[valueKey] || option.id || option.name,
          label: option[labelKey] || option.label || option.name,
        };
      } else {
        return null;
      }
    })
    .filter((option) => option !== null);

  if (defaultOption !== null && isObject(defaultOption)) {
    optionArray.unshift(defaultOption);
  }

  return optionArray;
};

/**
 * Generate a random color in hexadecimal format.
 * @returns {string} Random color in hexadecimal format (e.g., "#RRGGBB").
 */
export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  const colorLength = 6;
  let color = "#";

  for (let i = 0; i < colorLength; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }

  return color;
}

/**
 * Splits a string into an array of words, removing punctuation and converting to lowercase.
 *
 * @param {string} str - The input string to process.
 * @returns {string[]} An array of words extracted from the input string, or an empty array if no input string is provided.
 */
export function getWordsFromString(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return [];
  }

  const words = str
    .toLowerCase()
    // eslint-disable-next-line no-useless-escape
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  return words;
}

/**
 * Formats a number with specified options.
 * @param {number} number - The number to format.
 * @param {number} [decimalPlaces = 2] - The number of decimal places to round to.
 * @param {boolean} [useThousandsSeparator = false] - Whether to use thousands separator.
 * @param {string} [thousandsSeparator = ","] - The character used as thousands separator.
 * @param {string} [decimalSeparator = "."] - The character used as decimal separator.
 * @returns {string} - The formatted number as a string.
 */
export const formatNumber = (
  number,
  decimalPlaces = 2,
  useThousandsSeparator = false,
  thousandsSeparator = ",",
  decimalSeparator = "."
) => {
  if (typeof number !== "number") {
    throw new Error("Invalid input. Expected a number.");
  }

  if (isNaN(number)) {
    throw new Error("Invalid number.");
  }

  if (typeof decimalPlaces !== "number") {
    throw new Error(
      "Invalid decimalPlaces value. Expected a non-negative number."
    );
  }

  if (typeof useThousandsSeparator !== "boolean") {
    throw new Error("Invalid useThousandsSeparator value. Expected a boolean.");
  }

  if (
    useThousandsSeparator &&
    (typeof thousandsSeparator !== "string" ||
      typeof decimalSeparator !== "string")
  ) {
    throw new Error("Invalid separator. Expected string values.");
  }

  const formatted = number.toFixed(decimalPlaces);

  const parts = formatted.split(".");
  parts[0] = parts[0].replace(
    /\B(?=(\d{3})+(?!\d))/g,
    useThousandsSeparator ? thousandsSeparator : ""
  );

  // Skip decimal part if it's ".00"
  if (parseInt(parts[1]) === 0) {
    return parts[0];
  }

  return parts.join(decimalSeparator);
};
