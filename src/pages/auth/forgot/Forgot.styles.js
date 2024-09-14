import styled from "styled-components";
import { theme } from "styles/Theme";

export const BorderedDiv = styled.div`
  min-height: 400px;
  border-top: ${theme.border.width} solid ${theme.border.color};
  padding: 16px 0;
`;
