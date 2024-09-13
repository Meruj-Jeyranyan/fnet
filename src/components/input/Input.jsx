import React, { forwardRef, useState } from "react";
import {
  InputWrapper,
  StyledInput,
  ErrorText,
  IconWrapper,
  Icon,
} from "./Input.styles";
import ShowPass from "assets/show-pass.svg";
import HidePass from "assets/hide-pass.svg";

const Input = forwardRef(
  ({ error, fullWidth, type = "text", ...rest }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
      setShowPassword((prev) => !prev);
    };

    const inputType = type === "password" && showPassword ? "text" : type;

    return (
      <InputWrapper fullWidth={fullWidth}>
        <StyledInput ref={ref} type={inputType} $error={error} {...rest} />
        {type === "password" && (
          <IconWrapper onClick={handleClickShowPassword}>
            {showPassword ? (
              <Icon src={HidePass} alt="eye" />
            ) : (
              <Icon src={ShowPass} alt="eye" />
            )}
          </IconWrapper>
        )}
        {error && <ErrorText>{error}</ErrorText>}
      </InputWrapper>
    );
  }
);

export default Input;
