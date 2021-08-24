import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";

const StyledButtonGroup = styled.span`
  display: inline-flex;
  & > * {
    ${(props) =>
      props.spacing === "veryLoose" &&
      css`
        margin-right: 32px;
      `}
    ${(props) =>
      props.spacing === "loose" &&
      css`
        margin-right: 16px;
      `}
    ${(props) =>
      props.spacing === "tight" &&
      css`
        margin-right: 8px;
      `}
    ${(props) =>
      props.spacing === "veryTight" &&
      css`
        margin-right: 4px;
      `}
  }
`;

export default function ButtonGroup({ children, spacing = "loose" }) {
  const keyedButtons = React.Children.toArray(children);
  return (
    <StyledButtonGroup spacing={spacing}>{keyedButtons}</StyledButtonGroup>
  );
}

ButtonGroup.propTypes = {
  children: PropTypes.array.isRequired,
  spacing: PropTypes.oneOf(["veryLoose", "loose", "tight", "veryTight"]),
};
