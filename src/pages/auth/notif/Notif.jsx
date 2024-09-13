import { Container, Icon, SuccessText, ErrorText } from "./Notif.styles";
import success from "assets/success.svg";
import error from "assets/error.svg";

const errorb = false;
const successb = false;
const errorText = "Erro errrororororo rooror";
const successText = "sdadsajkdnjkdndas";

const Notif = () => {
  return (
    <Container>
      {successb && (
        <>
          <Icon src={success} alt="success" />
          <SuccessText>{successText}</SuccessText>
        </>
      )}
      {errorb && (
        <>
          <Icon src={error} alt="error" />
          <ErrorText>{errorText}</ErrorText>
        </>
      )}
    </Container>
  );
};

export default Notif;
