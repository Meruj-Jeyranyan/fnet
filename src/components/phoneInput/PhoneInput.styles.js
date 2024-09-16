import styled from "styled-components";

export const PhoneInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.$error ? "red" : "#194866CC")};
  border-radius: 12px;
  height: 48px;
  position: relative;
  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};
  margin-bottom: 16px;

  &:focus-within {
    border-color: ${(props) => (props.$error ? "red" : "#0c212ecc")};
  }
`;

export const PhoneInputField = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  padding: 8px;
  width: ${(props) => (props.$width ? props.$width : "auto")};

  &:first-child {
    padding-left: 16px;
    border-radius: 12px;
  }
`;

export const PhoneSeparator = styled.div`
  height: 100%;
  width: 1px;
  background-color: ${(props) => (props.$error ? "red" : "#194866cc")};
  margin: 0 8px;
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
