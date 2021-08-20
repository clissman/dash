import PropTypes from "prop-types";
import React, { useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import check from "../stories/assets/images/icons/checkmark.svg";
import indeterminate from "../stories/assets/images/icons/indeterminate.svg";
import { color, typography, animation } from "./global/styles";

export const sizes = {
  large: 24,
  medium: 20,
  small: 16,
};

const Label = styled.label`
  padding: 8px;
  display: inline-flex;
  cursor: pointer;
  border-radius: 4px;
  transition: ${animation.fade};
  &:hover {
    background: ${color.gray05};
  }
`;

const LabelText = styled.span`
  font-size: ${typography.label};
  font-family: Inter, sans-serif;
  letter-spacing: 0.4px;
  color: ${color.gray80};
`;

const Input = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;

  & + ${LabelText}::before {
    opacity: 100%;
    content: "";
    border-radius: 4px;
    border: 1px solid ${color.gray_300};
    position: absolute;
    height: ${sizes.medium}px;
    width: ${sizes.medium}px;
    background-color: white;
    left: 0;
    transition: background-color ${animation.fade};
    ${(props) =>
      props.invalid &&
      css`
        border: 1px solid red;
        background-color: red;
      `}

    ${(props) =>
      props.size === "small" &&
      css`
        width: ${sizes.small}px;
        height: ${sizes.small}px;
      `}

    ${(props) =>
      props.size === "large" &&
      css`
        width: ${sizes.large}px;
        height: ${sizes.large}px;
      `}
  }

  &:checked + ${LabelText}::before {
    background-color: ${color.primary};
    border: 1px solid ${color.primary};
    background-image: url(${check});
    background-repeat: no-repeat;
    background-size: 70%;
    background-position: center center;
  }

  &:disabled + ${LabelText}::before {
    border: 1px solid #a2a9ae;
    background: gray;
  }

  &:indeterminate + ${LabelText}::before {
    background-image: url(${indeterminate});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 70%;
  }
`;

/** 
Checkboxes let users select any number of multiple, independent options.
**/

export default function Checkbox({
  id,
  size,
  label,
  indeterminate,
  error,
  ...props
}) {
  const checkRef = useRef();

  useEffect(() => {
    checkRef.current.indeterminate = indeterminate
  }, [indeterminate]);

  return (
    <Label>
      <Input
        type="checkbox"
        id={id}
        ref={checkRef}
        size={size}
        invalid={error}
        {...props}
      />
      <LabelText>{label}</LabelText>
    </Label>
  );
}

Checkbox.propTypes = {
  /** Provide a unique id to identify the checkbox */
  id: PropTypes.string.isRequired,
  /** Specify whether the checkbox is in an indeterminate state */
  indeterminate: PropTypes.bool,
  /** Provide a label relaying which item is being checked */
  label: PropTypes.string.isRequired,
  /** Specify the size of the checkbox */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Specify whether the checkbox is invalid */
  invalid: PropTypes.bool,
  /** Specify whether the checkbox is disabled */
  disabled: PropTypes.bool,
};
