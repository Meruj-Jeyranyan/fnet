import { StyledButton } from "./Button.styles";

const Button = ({ width, primary, children, ...rest }) => {
  return (
    <StyledButton width={width} $primary={primary} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
