import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "assets/logo.svg";
import { Container, Header, Icon } from "./Layout.styles";

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogoClick = (p) => navigate(p);

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
