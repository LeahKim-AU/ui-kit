import React, { forwardRef } from "react";
import styled from "@emotion/styled";

type InputProps = {
  label?: string;
  error?: string;
  helperText?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #111827;
  font-weight: 600;
`;

const StyledInput = styled.input<{ $invalid?: boolean }>`
  height: 40px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid
    ${({ $invalid }) => ($invalid ? "#ef4444" : "#e5e7eb")};
  background: #ffffff;
  color: #111827;
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: ${({ $invalid }) => ($invalid ? "#ef4444" : "#111")};
    box-shadow: 0 0 0 3px
      ${({ $invalid }) => ($invalid ? "rgba(239,68,68,0.2)" : "rgba(0,0,0,0.15)")};
  }

  &:disabled {
    background: #f9fafb;
    color: #9ca3af;
    cursor: not-allowed;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const Helper = styled.p`
  font-size: 12px;
  color: #6b7280;
  margin: 0;
`;

const ErrorText = styled.p`
  font-size: 12px;
  color: #ef4444;
  margin: 0;
`;

// 접근성: label과 input을 for/id로 연결하고, 에러/헬퍼 텍스트는 aria-describedby로 연결
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, error, helperText, disabled, ...rest }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 8)}`;
    const helperId = helperText ? `${inputId}-helper` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    const describedBy = [helperId, errorId].filter(Boolean).join(" ") || undefined;

    return (
      <Field>
        {label && <Label htmlFor={inputId}>{label}</Label>}
        <StyledInput
          id={inputId}
          ref={ref}
          $invalid={!!error}
          aria-invalid={!!error || undefined}
          aria-describedby={describedBy}
          disabled={disabled}
          {...rest}
        />
        {error ? (
          <ErrorText id={errorId}>{error}</ErrorText>
        ) : helperText ? (
          <Helper id={helperId}>{helperText}</Helper>
        ) : null}
      </Field>
    );
  }
);

Input.displayName = "Input";
