import React, { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import Button from "components/button";
import close from "assets/close.svg";
import {
  Title,
  Header,
  Footer,
  Overlay,
  Content,
  CloseIcon,
  CloseButton,
} from "./Modal.styles";

const Modal = ({
  onOk,
  title,
  width,
  isOpen,
  footer,
  height,
  onClose,
  centered,
  children,
  container,
  closeIcon,
  className,
  onOkLoading,
  overlayClassName,
  component: Component = "div",
}) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const renderModal = () => {
    return (
      <>
        <Overlay className={overlayClassName} onClick={handleOverlayClick}>
          <Content
            className={className}
            $centered={centered}
            width={width}
            height={height}
          >
            <Header>
              {title && <Title>{title}</Title>}
              <CloseButton onClick={onClose}>
                {closeIcon ? closeIcon : <CloseIcon src={close} />}
              </CloseButton>
            </Header>
            {children}
            {footer && (
              <Footer>
                <Button onClick={onClose}>Cancel</Button>
                <Button primary onClick={onOk} loading={onOkLoading}>
                  Submit
                </Button>
              </Footer>
            )}
          </Content>
        </Overlay>
      </>
    );
  };

  return isOpen
    ? createPortal(
        <Component>{renderModal()}</Component>,
        container || document.body
      )
    : null;
};
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func,
  $centered: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  overlayClassName: PropTypes.string,
  footer: PropTypes.bool,
};

export default Modal;
