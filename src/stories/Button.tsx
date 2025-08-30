import React from "react";
import styled from "@emotion/styled";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button<{ $variant: string; $size: string }>`
  border: 0;
  cursor: pointer;
  border-radius: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;
  transition: opacity 0.15s ease;

  ${({ $size }) =>
    $size === "sm"
      ? "height:32px; padding:0 12px; font-size:12px;"
      : $size === "md"
      ? "height:40px; padding:0 16px; font-size:14px;"
      : "height:48px; padding:0 18px; font-size:15px;"}

  ${({ $variant }) =>
    $variant === "primary"
      ? "background:#111; color:#fff;"
      : $variant === "secondary"
      ? "background:#f2f3f5; color:#111;"
      : "background:transparent; color:#111; border:1px solid #e5e7eb;"}

  &:hover { opacity: 0.9; }
  &:disabled { opacity: 0.6; cursor: not-allowed; }
  &:focus-visible { box-shadow: 0 0 0 3px rgba(0,0,0,0.2); }
`;

export function Button({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  ...rest
}: ButtonProps) {
  return (
    <StyledButton
      aria-busy={loading || undefined}
      aria-disabled={rest.disabled || loading || undefined}
      $variant={variant}
      $size={size}
      {...rest}
    >
      {loading ? "Loading..." : children}
    </StyledButton>
  );
}
