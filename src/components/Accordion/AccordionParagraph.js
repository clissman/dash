import React from "react";
import styled, { css } from "styled-components";
import { color, Body1 } from "../shared/styles";

const Paragraph = styled.p`
  ${Body1};
  color: ${color.gray90};
`;

const StyledAccordionParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  ${(props) =>
    !props.isOpen &&
    css`
      display: none;
    `}
`;

export default function AccordionParagraph({ children, isOpen }) {
  return (
    <StyledAccordionParagraph isOpen={isOpen}>
      <Paragraph>{children}</Paragraph>
    </StyledAccordionParagraph>
  );
}
