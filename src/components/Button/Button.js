import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Loading from '../Loading/Loading'
import {
  color,
  ButtonLarge,
  ButtonMedium,
  ButtonSmall,
} from "../shared/styles";


const StyledButton = styled.button`
  display: flex;
  border-radius: 2px;
  box-sizing: border-box;
  transition: 0.2s;
  padding: 8px 16px;
  border: 2px solid;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 4px ${color.primaryLight};
  }

  & > svg {
    margin-right: ${(props) => !props.isIconOnly && "8px"}
  }

  ${(props) =>
    props.size === "large" &&
    css`
      ${ButtonLarge}
      padding: 16px 32px;
      padding: ${(props) => props.isIconOnly && "16px 16px"};
    `}

  ${(props) =>
    props.size === "medium" &&
    css`
      ${ButtonMedium}
      padding: ${(props) => props.isIconOnly && "8px 8px"};
    `}
      
   ${(props) =>
    props.size === "small" &&
    css`
      ${ButtonSmall}
      border-radius: 2px;
      padding: ${(props) => props.isIconOnly && "8px 8px"};
    `}

    ${(props) =>
    props.variant === "primary" &&
    css`
      background: ${color.primary};
      color: ${color.white};
      border-color: ${color.primary};
      &:hover {
        background: ${color.primaryDark};
        border-color: ${color.primaryDark};
      }
      &:disabled {
        background: ${color.gray25};
        cursor: not-allowed;
        border-color: ${color.gray25};
      }
    `}
    
    ${(props) =>
    props.variant === "secondary" &&
    css`
      background: ${color.white};
      color: ${color.primary};
      border-color: ${color.primary};
      &:hover {
        background: ${color.primarySubtle};
        border-color: ${color.primary};
      }
      &:disabled {
        background: ${color.white};
        color: ${color.gray25};
        border-color: ${color.gray25};
        cursor: not-allowed;
      }
    `}

     ${(props) =>
    props.variant === "transparent" &&
    css`
      background: ${color.white};
      color: ${color.primary};
      border-color: transparent;
      &:hover {
        background: ${color.primarySubtle};
      }
      &:disabled {
        background: ${color.white};
        color: ${color.gray25};
        cursor: not-allowed;
      }
    `}
`;

export default function Button({
  children,
  size = "medium",
  isLoading,
  variant = "primary",
  disabled,
  ...props
}) {
const isIconOnly = typeof children !== "string" && !(children.length >= 1);
  return (
    <StyledButton
      as="button"
      size={size}
      variant={variant}
      disabled={disabled}
      isIconOnly={isIconOnly}
      {...props}
    >
    {isLoading && <Loading />}
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["primary", "secondary", "transparent"]),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
};
