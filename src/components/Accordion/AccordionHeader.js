import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { typography, color } from "../shared/styles";
import ChevronDown from "../Icons/ChevronDown";

const { size, family, weight } = typography;

const StyledAccordionHeader = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 8px 8px 16px;
  border: hidden;
  background: none;
  margin: 0;
  width: 100%;
  cursor: pointer;
  color: ${color.gray55};
  &:hover {
    color: ${color.gray90};
  }
  ${(props) =>
    props.isOpen &&
    css`
      color: ${color.secondaryDark};
    `}
  &:hover {
    ${(props) =>
      props.isOpen &&
      css`
        color: ${color.secondaryDark};
      `}
  }
`;

const Header = styled.p`
  font-size: ${size.subtitle1}px;
  font-family: ${family.primary};
  font-weight: ${weight.bold};
  margin: 0;
`;

const Arrow = styled.div`
  color: initial;
  transition: transform 0.2s;
  ${(props) =>
    props.isOpen &&
    css`
      transform: rotate(180deg);
    `}
`;

export default function AccordionHeader({ children, onClick, isOpen = false }) {
  return (
    <StyledAccordionHeader onClick={onClick} isOpen={isOpen}>
      <Header>{children}</Header>
      <Arrow isOpen={isOpen}>
        <ChevronDown />
      </Arrow>
    </StyledAccordionHeader>
  );
}

AccordionHeader.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.any,
};
