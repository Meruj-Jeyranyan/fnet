import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "components/input";
import Button from "components/button";
import {
  Form,
  Title,
  RowDiv,
  StyledDiv,
  Container,
  StyledText,
  RegOptionText,
  ForgotPasswordLink,
} from "./Login.styles";
import Notif from "../notif/Notif";
import { useTranslation } from "react-i18next";
import "i18n/i18n.js";

const Login = () => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    username: yup.string().required(t("login.errors.usernameRequired")),
    password: yup.string().required(t("login.errors.passwordRequired")),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Title>{t("login.title")}</Title>
      <StyledText>{t("login.welcome")}</StyledText>

      <StyledDiv>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder={t("login.username")}
                type="text"
                error={errors.username?.message}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder={t("login.password")}
                type="password"
                error={errors.password?.message}
              />
            )}
          />
          <ForgotPasswordLink>{t("login.forgotPassword")}</ForgotPasswordLink>

          <Button type="submit" primary>
            {t("login.submit")}
          </Button>
        </Form>
      </StyledDiv>
      <Notif />
      <RegOptionText>{t("login.registerAs")}</RegOptionText>
      <RowDiv>
        <Button secondary>{t("login.teacher")}</Button>
        <Button secondary>{t("login.donor")}</Button>
      </RowDiv>
    </Container>
  );
};

export default Login;
