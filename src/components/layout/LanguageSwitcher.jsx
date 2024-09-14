import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageContainer, LanguageButton } from "./Layout.styles";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [activeLang, setActiveLang] = useState(i18n.language);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setActiveLang(lang);
  };

  return (
    <LanguageContainer>
      <LanguageButton
        $isActive={activeLang === "en"}
        onClick={() => changeLanguage("en")}
      >
        Eng
      </LanguageButton>
      <LanguageButton
        $isActive={activeLang === "hy"}
        onClick={() => changeLanguage("hy")}
      >
        Հայ
      </LanguageButton>
      <LanguageButton
        $isActive={activeLang === "ru"}
        onClick={() => changeLanguage("ru")}
      >
        Рус
      </LanguageButton>
    </LanguageContainer>
  );
};

export default LanguageSwitcher;
