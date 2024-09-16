import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  selectUserRegistrationType,
  setUserRegistrationType,
} from "features/auth/authSlice";
import Input from "components/input";
import Button from "components/button";
import { Select } from "components/select";
import PhoneInput from "components/phoneInput";
import Modal from "components/modal";
import { RowDiv, Form, StyledLinkButton } from "./Register.styles";
import { Container } from "../login/Login.styles";
import * as yup from "yup";
import "i18n/i18n.js";

const getOppositeUserType = (userType) => {
  switch (userType) {
    case "teacher":
      return "donor";
    case "donor":
      return "teacher";
    default:
      return "teacher";
  }
};

const singleSelectOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

const multiSelectOptions = Array.from({ length: 5 }, (_, i) => ({
  value: `option${i + 1}`,
  label: `Random Option ${i + 1}`,
}));

const Register = () => {
  const { t } = useTranslation();
  const userType = useSelector(selectUserRegistrationType);
  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required(t("register.errors.nameRequired")),
    lastName: yup.string().required(t("register.errors.lastNameRequired")),
    email: yup
      .string()
      .email(t("register.errors.invalidEmail"))
      .required(t("register.errors.emailRequired")),
    phoneNumber: yup
      .string()
      .required(t("register.errors.phoneRequired"))
      .matches(/^\+?\d{1,3}\d{6,14}$/, t("register.errors.phoneInvalid")),
    password: yup
      .string()
      .min(8, t("register.errors.passwordMin"))
      .required(t("register.errors.passwordRequired")),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        t("register.errors.confirmPasswordMatch")
      )
      .required(t("register.errors.confirmPasswordRequired")),
    country: yup.mixed(),
    region: yup.mixed(),
    city: yup.mixed(),
    subject: yup.mixed(),
    grade: yup.mixed(),
  });

  const handleClickUserTypeChange = () => {
    dispatch(setUserRegistrationType(getOppositeUserType(userType)));
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    if (data.email === "asd@gmail.com") {
      setModalOpen(true);
    } else {
      console.log("Form Data: ", data);
    }
  };

  useEffect(() => {
    const savedUserType = localStorage.getItem("userType");
    if (savedUserType) {
      dispatch(setUserRegistrationType(savedUserType));
    }
  }, [dispatch]);

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <RowDiv>
          <Controller
            name="name"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                fullWidth
                placeholder={t("name")}
                error={errors.name?.message}
              />
            )}
          />
          <Controller
            name="lastName"
            defaultValue=""
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                fullWidth
                placeholder={t("last name")}
                error={errors.lastName?.message}
              />
            )}
          />
        </RowDiv>

        <Controller
          name="email"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder={t("email")}
              error={errors.email?.message}
            />
          )}
        />

        <Controller
          name="phoneNumber"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <PhoneInput
              {...field}
              placeholder={t("phoneNumber")}
              error={errors.phoneNumber?.message}
            />
          )}
        />

        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={singleSelectOptions}
              placeholder={t("country")}
              error={errors.country?.message}
            />
          )}
        />

        <Controller
          name="region"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={singleSelectOptions}
              placeholder={t("region")}
              error={errors.region?.message}
            />
          )}
        />

        <Controller
          name="city"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              options={singleSelectOptions}
              placeholder={t("city")}
              error={errors.city?.message}
            />
          )}
        />

        {userType === "teacher" && (
          <>
            <Controller
              name="subject"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={singleSelectOptions}
                  placeholder={t("subject")}
                  error={errors.subject?.message}
                />
              )}
            />

            <Controller
              name="grade"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={multiSelectOptions}
                  placeholder={t("grade")}
                  error={errors.grade?.message}
                />
              )}
            />
          </>
        )}

        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              placeholder={t("password")}
              error={errors.password?.message}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          defaultValue=""
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              type="password"
              placeholder={t("confirmPassword")}
              error={errors.confirmPassword?.message}
            />
          )}
        />

        <RowDiv>
          <StyledLinkButton onClick={handleClickUserTypeChange}>
            {t("Register as")} {getOppositeUserType(userType)}
          </StyledLinkButton>

          <Button primary type="submit" width={70}>
            {t("Ok")}
          </Button>
        </RowDiv>
      </Form>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Registration Error"
        footer={false}
        onOk={() => setModalOpen(false)}
      >
        <p>Email already registered</p>
      </Modal>
    </Container>
  );
};

export default Register;
