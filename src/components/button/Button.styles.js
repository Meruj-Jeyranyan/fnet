import styled from "styled-components";

export const StyledButton = styled.button`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  padding: 10px 20px;
  border: ${({ $primary }) => ($primary ? "none" : "0.5px solid #1948664D")};
  border-radius: 12px;
  background-color: ${({ $primary }) => ($primary ? "#34c88a" : "#F8F8F8")};
  color: ${({ $primary }) => ($primary ? "white" : "#194866")};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: ${({ $primary }) =>
    $primary ? "none" : "0px 2px 8px 0px #19486629"};

  &:hover {
    background-color: ${({ $primary }) => ($primary ? "#66ffbf" : "#E0E0E0")};
  }

  &:focus {
    outline: none;
  }
`;
