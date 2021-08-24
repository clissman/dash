import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { typography } from "../shared/styles";

export const avatarFontSizes = {
  xxxs: 7,
  xxs: 8,
  xs: 10,
  s: 12,
  m: 14,
  l: 17,
  xl: 20,
  xxl: 27,
};

const Initial = styled.div`
  font-size: 27px;
  color: white;
  font-family: ${typography.family.primary};
  font-weight: ${typography.weight.medium};
  text-transform: uppercase;
  font-size: ${(props) => avatarFontSizes[props.size]}px;
  ${(props) =>
    ["xxxs", "xxs", "xs"].some((s) => s == props.size) &&
    css`
      font-weight: ${typography.weight.semiBold};
      letter-spacing: 0.2px;
    `}
`;

export default function AvatarInitial({ children, size }) {
  return <Initial size={size}>{children}</Initial>;
}

AvatarInitial.propTypes = {
  children: PropTypes.array,
  size: PropTypes.string,
};
