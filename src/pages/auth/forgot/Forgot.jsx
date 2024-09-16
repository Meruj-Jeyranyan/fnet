import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  setForgotStep,
  setAuthSuccess,
  selectUserInfo,
  selectForgotStep,
} from "features/auth/authSlice";
import Input from "components/input";
import Button from "components/button";
import * as yup from "yup";
import Notif from "../notif/Notif";
import {
  Container,
  Title,
  StyledText,
  Form,
  ForgotPasswordLink,
} from "../login/Login.styles";
import "i18n/i18n.js";
import { StyledDiv, BorderedDiv } from "./Forgot.styles";

const Forgot = () => {
  const { t } = useTranslation();
  const userInfo = useSelector(selectUserInfo);
  const forgotStep = useSelector(selectForgotStep);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(t("forgot.errors.invalidEmail"))
      .required(t("forgot.errors.emailRequired")),
    code:
      forgotStep === 2
        ? yup.string().required(t("forgot.errors.codeRequired"))
        : yup.string(),
    password:
      forgotStep === 2
        ? yup
            .string()
            .min(8, t("forgot.errors.passwordMin"))
            .required(t("forgot.errors.passwordRequired"))
        : yup.string(),
    confirmPassword:
      forgotStep === 2
        ? yup
            .string()
            .oneOf(
              [yup.ref("password"), null],
              t("forgot.errors.passwordsMustMatch")
            )
            .required(t("forgot.errors.confirmPasswordRequired"))
        : yup.string(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleResendCode = () => {
    alert("Code is 0000");
  };

  const handleReturnLoginPage = () => {
    navigate("/login");
    dispatch(setForgotStep(1));
  };

  const onSubmit = (data) => {
    if (forgotStep === 1) {
      if (userInfo.email === data.email) {
        dispatch(setForgotStep(2));
      }
    } else if (forgotStep === 2 && data.code === "0000") {
      dispatch(setAuthSuccess(true));
      dispatch(setForgotStep(1));
      navigate("/login");
    }
  };

  return (
    <Container>
      <Title>{t("forgot.title")}</Title>
      {forgotStep === 1 ? (
        <>
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
        </>
      ) : (
        <>
          <StyledText>{t("forgot.description2")}</StyledText>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <StyledDiv>
              <Controller
                name="code"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    placeholder={t("forgot.code")}
                    type="text"
                    error={errors.code?.message}
                  />
                )}
              />
              <ForgotPasswordLink onClick={handleResendCode}>
                Resend code
              </ForgotPasswordLink>
            </StyledDiv>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder={t("forgot.password")}
                  type="password"
                  error={errors.password?.message}
                />
              )}
            />
            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder={t("forgot.confirmPassword")}
                  type="password"
                  error={errors.confirmPassword?.message}
                />
              )}
            />
            <Button type="submit" primary>
              {t("forgot.submit")}
            </Button>
            <Notif />
            <Button onClick={handleReturnLoginPage}>
              I remember my password
            </Button>
          </Form>
        </>
      )}
    </Container>
  );
};

export default Forgot;
