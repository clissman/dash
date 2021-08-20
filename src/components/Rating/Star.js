import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { color } from "../global/styles";
import StarFill from "../Icons/StarFill";

const StyledStar = styled(StarFill)`
  color: ${(props) => (props.filled ? color.secondary : color.gray10)};
  cursor: pointer;
`;

export default function Star({ filled, onClick, size }) {
  return <StyledStar onClick={onClick} filled={filled} height={size} width={size} />;
}

Star.propTypes = {
  filled: PropTypes.number, // uses "1" or "0" instead of a boolean to avoid React showing an error
  onClick: PropTypes.any,
  size: PropTypes.number
}
