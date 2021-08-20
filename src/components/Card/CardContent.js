import React from "react";
import styled from "styled-components"
import { color } from "../global/styles"

const Content = styled.p`
color: ${color.gray_600};
margin: 0;
`

export default function CardContent({ children }) {
  return <Content>{children}</Content>;
};
