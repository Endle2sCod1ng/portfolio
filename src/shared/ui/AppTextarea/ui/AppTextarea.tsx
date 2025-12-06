import { useState, type ChangeEvent, type TextareaHTMLAttributes } from "react";
import styled from "styled-components";
import { AppButton } from "../../AppButton/AppButton";

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
    <FieldWrapper>
      <StyledAppTextarea
        {...otherPoprs}
        className={`${className ? className : ""}`}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={changeValue}
      />
      {value && <FieldCleaner onClick={() => setValue("")}>x</FieldCleaner>}
    </FieldWrapper>
  );
};

const FieldWrapper = styled.div`
  position: relative;
`;

const FieldCleaner = styled(AppButton)`
  position: absolute;
  top: 5px;
  right: 5px;
`;

const StyledAppTextarea = styled.textarea`
  width: 100%;
  outline: none;
  resize: none;
  border-radius: var(--border-radius-xs);
  padding: 14px 35px 14px 19px;
  min-height: 200px;

  border: 2px solid var(--inverted-bg-color);
  background: transparent;

  color: inherit;

  &:focus {
    color: var(--primary-color);
    background: linear-gradient(var(--bg-color), var(--bg-color)) padding-box,
      var(--acented-gradient) border-box;
    border: 2px solid transparent;
  }
`;
