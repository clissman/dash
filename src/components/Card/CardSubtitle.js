import React from "react";
import styled from 'styled-components'
import { color } from '../global/styles'

const Subtitle = styled.p`
color: ${color.gray55};
margin: 0 0 8px 0;
`

export default function CardSubtitle ({ children }) {
  return <Subtitle as="h3">{children}</Subtitle>;
};
