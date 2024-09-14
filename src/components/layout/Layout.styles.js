import styled from "styled-components";

export const Container = styled.div``;

export const Header = styled.div`
  min-height: 100px;
  margin-bottom: 12px;
  background-color: #34c88a;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
`;

export const Icon = styled.img`
  width: 99px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

// Language styles
export const LanguageContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 32px;
`;

export const LanguageButton = styled.a`
  color: ${({ $isActive }) => ($isActive ? "#F8F8F8" : "#e2e2e2")};
  border: none;
  padding: 10px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  margin-left: 10px;

  font-family: "Roboto", sans-serif; /* Nmana im karciqov Arialin google fonteri mej chkar Arial :) */

  &:hover {
    color: #194866;
  }
`;
