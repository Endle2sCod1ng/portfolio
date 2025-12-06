import { useState, type ChangeEvent, type InputHTMLAttributes } from "react";
import styled from "styled-components";
import { AppButton } from "../AppButton/AppButton";

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
    <FieldWrapper>
      <StyledAppInput
        {...otherPoprs}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={changeValue}
        className={`${className ? className : ""}`}
      />
      {value && (
        <FieldCleaner
          onClick={() => {
            setValue("");
            onChangeValue("");
          }}
        >
          x
        </FieldCleaner>
      )}
    </FieldWrapper>
  );
};
const FieldWrapper = styled.div`
  position: relative;
`;

const FieldCleaner = styled(AppButton)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 5px;
`;

const StyledAppInput = styled.input`
  width: 100%;
  outline: none;

  border-radius: var(--border-radius-xs);
  padding: 14px 35px 14px 19px;
  background: transparent;
  border: 2px solid var(--inverted-bg-color);
  color: inherit;

  &:focus {
    background: linear-gradient(var(--bg-color), var(--bg-color)) padding-box,
      var(--acented-gradient) border-box;
    border: 2px solid transparent;
  }
`;
