export const validateInputs = (inputFields) => {
  const emptyInputs = [];

  for (const { field, label } of inputFields) {
    if (!field) {
      emptyInputs.push(label);
    }
  }

  return emptyInputs;
};
