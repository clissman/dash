import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import { color, Body2 } from "../shared/styles";

const Content = styled.p`
  ${Body2}
  color: ${color.gray80};
  margin: 8px 0 16px 0;
  display: flex;
  flex: 1 1 auto;
`;

export default function CardContent({ children }) {
  return <Content>{children}</Content>;
}

CardContent.propTypes = {
  children: PropTypes.string.isRequired
};
