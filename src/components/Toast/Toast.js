import PropTypes from "prop-types";
import React from "react";
import { ButtonSmall, Body1, color } from "../shared/styles";
import styled, { css } from "styled-components";
import Close from "../Icons/Close";

const StyledToast = styled.div`
  box-sizing: border-box;
  display: inline-flex;
  border-radius: 4px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;

  ${(props) =>
    props.status === "warning" &&
    css`
      background-color: ${color.warning};
      color: ${color.gray90};
    `}

  ${(props) =>
    props.status === "info" &&
    css`
      background-color: ${color.information};
      color: ${color.white};
    `}
  
  ${(props) =>
    props.status === "default" &&
    css`
      background-color: ${color.gray80};
      color: ${color.white};
    `}
  
  ${(props) =>
    props.status === "success" &&
    css`
      background-color: ${color.positive};
      color: ${color.gray90};
    `}
  
  ${(props) =>
    props.status === "light" &&
    css`
      background-color: ${color.white};
      color: ${color.gray90};
      border: 1px solid ${color.gray15};
    `}
  
  ${(props) =>
    props.status === "error" &&
    css`
      background-color: ${color.negative};
      color: ${color.gray90};
    `}
`;

const Text = styled.span`
  flex: none;
  order: 0;
  flex-grow: 0;
  max-width: 280px;
  ${Body1}
`;

const Link = styled.span`
  margin: 0 0 0 48px;
  cursor: pointer;
  display: ${(props) => !props.link && "none"};
  color: ${color.gray90};
  text-transform: uppercase;
  user-select: none;
  ${ButtonSmall}

  ${(props) =>
    (props.status === "default" || props.status === "info") &&
    css`
      color: white;
    `}
`;

const StyledClose = styled(Close)`
  margin: 0 0 0 48px;
`;

export default function Toast({ status, icon, link, children, ...props }) {
  return (
    <StyledToast status={status} link={link} {...props}>
      <Text>{children}</Text>
      <Link status={status} link={link}>
        Retry
      </Link>
      {icon && <StyledClose />}
    </StyledToast>
  );
}

Toast.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.bool,
  link: PropTypes.bool,
  status: PropTypes.oneOf([
    "default",
    "light",
    "success",
    "info",
    "error",
    "warning",
  ]),
};
