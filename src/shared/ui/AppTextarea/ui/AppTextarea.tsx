import { useState, type ChangeEvent, type TextareaHTMLAttributes } from "react";
import { AppButton } from "../../AppButton/AppButton";
import s from "./AppTextarea.module.scss";

interface AppTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputValue: string;
  name: string;
  id: string;
  placeholder: string;
  onChangeValue: (value: string) => void;
  className?: string;
}
export const AppTextarea = ({
  inputValue,
  placeholder,
  name,
  id,
  className,
  onChangeValue,
  ...otherPoprs
}: AppTextareaProps) => {
  const [value, setValue] = useState<string>(inputValue);
  const changeValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.currentTarget.value);
    onChangeValue(value);
  };

  return (
    <div className={s.fieldWrapper}>
      <textarea
        {...otherPoprs}
        className={`${s.textarea} ${className ? className : ""}`}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={changeValue}
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
