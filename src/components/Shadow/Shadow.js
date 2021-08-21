import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { shadow } from "../shared/styles";

const StyledShadow = styled.div`
  border-radius: 4px;
  width: 75px;
  height: 75px;
  background-color: white;

  ${(props) =>
    props.shadow === "one" &&
    css`
      box-shadow: ${shadow.one};
    `}

  ${(props) =>
    props.shadow === "two" &&
    css`
      box-shadow: ${shadow.two};
    `}

    ${(props) =>
    props.shadow === "three" &&
    css`
      box-shadow: ${shadow.three};
    `}

    ${(props) =>
    props.shadow === "four" &&
    css`
      box-shadow: ${shadow.four};
    `}

    ${(props) =>
    props.shadow === "five" &&
    css`
      box-shadow: ${shadow.five};
    `}
`;

export const Shadow = ({ shadow = 'one' }) => <StyledShadow shadow={shadow} />;

Shadow.propTypes = {
  shadow: PropTypes.oneOf(["one", "two", "three", "four", "five"]),
};
