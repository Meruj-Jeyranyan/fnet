import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  margin-bottom: 16px;
  position: relative;
`;

export const StyledInput = styled.input`
  padding: 8px;
  border: 1px solid ${(props) => (props.$error ? "red" : "#194866CC")};
  height: 30px;
  border-radius: 12px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: ${(props) => (props.$error ? "red" : "#0c212ecc")};
  }
`;

export const ErrorText = styled.legend`
  color: red;
  font-size: 14px;
  font-weight: 300;
  margin-top: 4px;
  padding: 3px;
  background-color: #fff;
  position: absolute;
  top: -15px !important;
  left: 10px !important;
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const Icon = styled.img``;
