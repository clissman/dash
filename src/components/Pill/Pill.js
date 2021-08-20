import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { color, ButtonSmall } from "../global/styles";

const StyledPill = styled.span`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  background: ${color.warning};
  border: 0;
  border-radius: ${(props) => (props.shape === "pill" ? "16px" : "4px")};
  ${ButtonSmall}

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
    props.status === "fill" &&
    css`
      background-color: ${color.gray80};
      color: ${color.white};
    `}
  
  ${(props) =>
    props.status === "positive" &&
    css`
      background-color: ${color.positive};
      color: ${color.gray90};
    `}
  
  ${(props) =>
    props.status === "outline" &&
    css`
      background-color: ${color.white};
      color: ${color.gray90};
      border: 1px solid ${color.gray90};
    `}
  
  ${(props) =>
    props.status === "negative" &&
    css`
      background-color: ${color.negative};
      color: ${color.gray90};
    `}
`;

const IconLeft = styled.span`
  margin-right: 4px;
  & > * {
    width: 16px;
    height: 16px;
  }
`;

const IconRight = styled.span`
  margin-left: 4px;
  & > * {
    width: 16px;
    height: 16px;
  }
`;

export default function Pill({ shape, status, iconLeft, iconRight, children }) {
  return (
    <StyledPill shape={shape} status={status}>
      <IconLeft>{iconLeft}</IconLeft>
      {children}
      <IconRight>{iconRight}</IconRight>
    </StyledPill>
  );
}

Pill.propTypes = {
  children: PropTypes.string,
  shape: PropTypes.oneOf(["pill", "badge"]),
  iconLeft: PropTypes.element,
  iconRight: PropTypes.element,
  status: PropTypes.oneOf([
    "outline",
    "fill",
    "negative",
    "positive",
    "info",
    "warning",
  ]),
};
