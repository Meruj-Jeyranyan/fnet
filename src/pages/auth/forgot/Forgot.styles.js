import styled from "styled-components";
import { theme } from "styles/Theme";

export const BorderedDiv = styled.div`
  min-height: 400px;
  border-top: ${theme.border.width} solid ${theme.border.color};
  padding: 16px 0;
`;

export const StyledDiv = styled.div`
  border-bottom: ${theme.border.width} solid ${theme.border.color};
  border-top: ${theme.border.width} solid ${theme.border.color};
  width: 100%;
  min-height: 100px;
  padding: ${theme.spacing.medium} 0;
  margin: ${theme.spacing.medium} 0;
`;
