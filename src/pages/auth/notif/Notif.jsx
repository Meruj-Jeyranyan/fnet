import { useSelector } from "react-redux";
import { selectAuthSuccess, selectAuthError } from "features/auth/authSlice";
import { Container, Icon, SuccessText, ErrorText } from "./Notif.styles";
import success from "assets/success.svg";
import error from "assets/error.svg";

const errorb = false;
const successb = false;
const errorText = "Erro errrororororo rooror";
const successText = "Password changed";

const Notif = () => {
  const authSuccess = useSelector(selectAuthSuccess);
  const authError = useSelector(selectAuthError);

  return (
    <Container>
      {(successb || authSuccess) && (
        <>
          <Icon src={success} alt="success" />
          <SuccessText>{successText}</SuccessText>
        </>
      )}
      {errorb ||
        (authError && (
          <>
            <Icon src={error} alt="error" />
            <ErrorText>{errorText}</ErrorText>
          </>
        ))}
    </Container>
  );
};

export default Notif;
