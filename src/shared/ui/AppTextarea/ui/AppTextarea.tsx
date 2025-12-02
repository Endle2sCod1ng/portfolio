import type { TextareaHTMLAttributes } from "react";
import styled from "styled-components";

interface AppTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  id: string;
  placeholder: string;
  className?: string;
}
export const AppTextarea = ({
  placeholder,
  name,
  id,
  className,
  ...otherPoprs
}: AppTextareaProps) => {
  return (
    <StyledAppTextarea
      {...otherPoprs}
      className={`${className ? className : ""}`}
      name={name}
      id={id}
      placeholder={placeholder}
    />
  );
};

const StyledAppTextarea = styled.textarea`
  resize: none;
  border-radius: var(--border-radius-xs);
  padding: 14px 35px 14px 19px;

  background: linear-gradient(var(--bg-color), var(--bg-color)) padding-box,
    var(--acented--gradient) border-box;
  border: 2px solid transparent;
  &::placeholder {
    background-image: var(--acented--gradient-90);
    background-clip: text;
    color: transparent;
  }
`;
