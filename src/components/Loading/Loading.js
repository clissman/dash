import React from "react";
import { color } from "../shared/styles";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% {
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg)
    }
`;

const Spinner = styled.svg`
  animation: 0.9s ${spin} infinite linear;
  transform-origin: center;
`;

export default function Loading() {
  return (
    <Spinner
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48ZM24 40C32.8366 40 40 32.8366 40 24C40 15.1634 32.8366 8 24 8C15.1634 8 8 15.1634 8 24C8 32.8366 15.1634 40 24 40Z"
        fill={color.gray10}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46.1731 14.8154C47.3792 17.7272 48 20.848 48 23.9998H40C39.9999 15.1633 32.8365 8 24 8V-0.000244141C27.1517 -0.000244141 30.2726 0.620534 33.1844 1.82665C36.0962 3.03276 38.742 4.80059 40.9706 7.02919C43.1992 9.2578 44.967 11.9035 46.1731 14.8154Z"
        fill={color.secondary}
      />
    </Spinner>
  );
}
