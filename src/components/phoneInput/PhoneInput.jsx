import { forwardRef } from "react";
import {
  PhoneInputWrapper,
  PhoneInputField,
  PhoneSeparator,
  ErrorText,
} from "./PhoneInput.styles";

const PhoneInput = forwardRef(({ value, onChange, error }, ref) => {
  const handleCodeChange = (e) => {
    const newCode = e.target.value;
    onChange(`${newCode}${value?.number || ""}`);
  };

  const handleNumberChange = (e) => {
    const newNumber = e.target.value;
    onChange(`${value?.code || ""}${newNumber}`);
  };

  return (
    <PhoneInputWrapper $error={error} ref={ref}>
      <PhoneInputField
        type="text"
        onChange={handleCodeChange}
        placeholder="+374"
        $width="40px"
        maxLength={5}
      />
      <PhoneSeparator $error={error} />
      <PhoneInputField
        type="text"
        onChange={handleNumberChange}
        placeholder="Phone Number"
        $width="150px"
      />
      {error && <ErrorText>{error}</ErrorText>}
    </PhoneInputWrapper>
  );
});

export default PhoneInput;
