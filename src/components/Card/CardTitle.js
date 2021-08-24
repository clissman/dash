import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { color, Heading5 } from "../shared/styles";

const Title = styled.h2`
  ${Heading5}
  color: ${color.gray_800};
  margin: 0;
`;

export default function CardTitle({ children }) {
  return <Title as="h2">{children}</Title>;
}

CardTitle.propTypes = {
  children: PropTypes.string.isRequired
}
