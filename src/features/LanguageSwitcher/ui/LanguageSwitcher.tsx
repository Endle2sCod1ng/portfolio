import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  return (
    <AppButton
      onClick={() => i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")}
    >
      {"Lang"}
    </AppButton>
  );
};
