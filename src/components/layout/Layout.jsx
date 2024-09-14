import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "assets/logo.svg";
import { Container, Header, Icon } from "./Layout.styles";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogoClick = (p) => navigate(p);

  const location = useLocation();

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
    </Container>
  );
};

export default Layout;
