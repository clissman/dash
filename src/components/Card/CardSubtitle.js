import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { color, Subtitle1 } from "../shared/styles";

const Subtitle = styled.h3`
  ${Subtitle1}
  color: ${color.gray55};
  margin: 0 0 0 0;
`;

export default function CardSubtitle({ children }) {
  return <Subtitle as="h3">{children}</Subtitle>;
}

CardSubtitle.propTypes = {
  children: PropTypes.string.isRequired
}
