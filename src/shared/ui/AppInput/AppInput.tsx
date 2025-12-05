import { useState, type ChangeEvent, type InputHTMLAttributes } from "react";
import styled from "styled-components";

interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  className?: string;
}
export const AppInput = ({
  placeholder,
  type,
  className,
  ...otherPoprs
}: AppInputProps) => {
  const [text, setText] = useState<string>("");
  return (
    <StyledAppInput
      {...otherPoprs}
      placeholder={placeholder}
      type={type}
      value={text}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        setText(e.currentTarget.value)
      }
      className={`${className ? className : ""}`}
    />
  );
};

const StyledAppInput = styled.input`
  border-radius: var(--border-radius-xs);
  padding: 14px 35px 14px 19px;

  background: linear-gradient(var(--bg-color), var(--bg-color)) padding-box,
    var(--acented-gradient) border-box;
  border: 2px solid transparent;

  &::placeholder {
    background-image: var(--acented-gradient-90);
    background-clip: text;
    color: transparent;
  }
  &:focus {
    color: var(--primary-color);
  }
`;
