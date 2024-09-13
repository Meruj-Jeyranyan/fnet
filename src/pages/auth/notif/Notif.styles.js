import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 110px;
  display: flex;
  padding-bottom: 80px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Icon = styled.img`
  width: 72px;
  height: 72px;
`;

export const SuccessText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #34c88a;
`;

export const ErrorText = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #d80027;
`;
