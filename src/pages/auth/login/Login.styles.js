import styled from "styled-components";
import { theme } from "styles/Theme";

export const Container = styled.div`
  width: 400px;
  min-height: 500px;
  margin: 0 auto;
  border-radius: ${theme.border.radius};
  box-shadow: ${theme.boxShadow};
  padding: ${theme.spacing.large};
  justify-content: space-between;

  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.medium};
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  line-height: 24px;
  color: ${theme.colors.primary};
`;

export const StyledDiv = styled.div`
  border-bottom: ${theme.border.width} solid ${theme.border.color};
  border-top: ${theme.border.width} solid ${theme.border.color};
  width: 100%;
  padding: ${theme.spacing.medium} 0 ${theme.spacing.large} 0;
  display: flex;
  justify-content: center;
`;

export const StyledText = styled.p`
  font-size: ${theme.fontSize.medium};
  line-height: 24px;
  color: ${theme.colors.text};
`;

export const Form = styled.form`
  width: 100%;
`;

export const ForgotPasswordLink = styled.a`
  float: right !important;
  margin: ${theme.spacing.small} 0 ${theme.spacing.large} 0;
  font-size: ${theme.fontSize.small};
  color: ${theme.colors.link};
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

export const RegOptionText = styled.h2`
  font-weight: 600;
  font-size: ${theme.fontSize.large};
  line-height: 24px;
  margin-bottom: ${theme.spacing.large};
  color: ${theme.colors.primary};
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing.medium};
  width: 100%;
  justify-content: space-between;
`;
