import React from "react";
import styled from 'styled-components'
import { color } from '../global/styles'

const Title = styled.h2`
color: ${color.gray_800};
margin: 0;
`

export default function CardTitle({ children }) {
  return <Title as="h2">{children}</Title>;
};
