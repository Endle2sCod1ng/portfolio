import { AppButton } from "@/shared/ui/AppButton/AppButton";
import s from "./ScrollTop.module.scss";

export const ScrollTop = ({ className }: { className?: string }) => {
  return (
    <AppButton
      className={`${s.scrollTop} ${className ? className : ""}`}
      variant="outlined"
      borderRadius="s"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      {">>"}
    </AppButton>
  );
};
