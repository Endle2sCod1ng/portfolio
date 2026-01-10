import { useState, type ChangeEvent, type InputHTMLAttributes } from "react";
import { AppButton } from "../AppButton/AppButton";
import s from "./AppInput.module.scss";

interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  inputValue: string;
  onChangeValue: (value: string) => void;
  className?: string;
}

export const AppInput = ({
  placeholder,
  type,
  inputValue,
  className,
  onChangeValue,
  ...otherPoprs
}: AppInputProps) => {
  const [value, setValue] = useState<string>(inputValue);
  const changeValue = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
    onChangeValue(value);
  };

  return (
    <div className={s.fieldWrapper}>
      <input
        {...otherPoprs}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={changeValue}
        className={`${s.input} ${className ? className : ""}`}
      />
      {value && (
        <AppButton
          className={s.fieldCleaner}
          onClick={() => {
            setValue("");
            onChangeValue("");
          }}
        >
          x
        </AppButton>
      )}
    </div>
  );
};
