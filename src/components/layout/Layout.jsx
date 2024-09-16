import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "assets/logo.svg";
import Modal from "components/modal";
import { Container, Header, Icon } from "./Layout.styles";

const Layout = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetPath, setTargetPath] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = (path) => {
    if (location.pathname === "/register" || location.pathname === "/forgot") {
      setTargetPath(path);
      setIsModalOpen(true);
    } else {
      navigate(path);
    }
  };

  const handleConfirmLeave = () => {
    setIsModalOpen(false);
    navigate(targetPath);
  };

  const handleCancelLeave = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      if (
        location.pathname === "/register" ||
        location.pathname === "/forgot"
      ) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location.pathname]);

  return (
    <Container>
      <Header>
        <Icon alt="logo" src={Logo} onClick={() => handleLogoClick("/login")} />
        <LanguageSwitcher />
      </Header>
      {children}

      <Modal
        isOpen={isModalOpen}
        title="Are you sure you want to leave the page?"
        onOk={handleConfirmLeave}
        onClose={handleCancelLeave}
        footer
      >
        <p>If you leave this page now, all your progress will be lost</p>
      </Modal>
    </Container>
  );
};

export default Layout;
