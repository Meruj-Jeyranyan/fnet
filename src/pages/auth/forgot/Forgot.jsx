import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "components/input";
import Button from "components/button";
import * as yup from "yup";
import Notif from "../notif/Notif";
import { Container, Title, StyledText, Form } from "../login/Login.styles";
import "i18n/i18n.js";
import { BorderedDiv } from "./Forgot.styles";

const Forgot = () => {
  const { t } = useTranslation();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t("forgot.errors.invalidEmail"))
      .required(t("forgot.errors.emailRequired")),
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

  useEffect(() => {
    alert("ogtagorceq asd@gmail.com, mnacac depqerum khamarvi chgrancvac");
  }, []);

  return (
    <Container>
      <Title>{t("forgot.title")}</Title>
      <StyledText>{t("forgot.description")}</StyledText>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <BorderedDiv>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder={t("forgot.email")}
                type="email"
                error={errors.email?.message}
              />
            )}
          />

          <Notif />
        </BorderedDiv>
        <Button type="submit" primary>
          {t("forgot.submit")}
        </Button>
      </Form>
    </Container>
  );
};

export default Forgot;
