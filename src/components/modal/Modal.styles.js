import styled, { css } from "styled-components";

export const ModalButton = styled.div`
  background-color: #f50057;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Content = styled.div`
  position: relative;
  background-color: white;
  padding: 8px 32px;
  border-radius: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: ${({ width }) => width || "600px"};
  height: ${({ height }) => height || "auto"};

  ${(props) =>
    props.$centered &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    `}
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 40px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  margin-top: 0;
  margin-bottom: 5px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 28px;
  gap: 10px;
`;

export const CloseIcon = styled.img``;

export const CloseButton = styled.div`
  cursor: pointer;
`;
