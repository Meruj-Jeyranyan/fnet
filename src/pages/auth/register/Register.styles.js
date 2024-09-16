import styled from "styled-components";
import { ForgotPasswordLink } from "../login/Login.styles";

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`;

export const Form = styled.form`
  width: 100%;
`;

export const StyledLinkButton = styled(ForgotPasswordLink)`
  color: #34c88a;
`;
