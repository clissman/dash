import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import chevron from "../../stories/assets/images/icons/24px/chevron-right.svg";
import { Body1, Body2, color } from "../global/styles";

const List = styled.li`
  list-style-type: none;
  display: inline-flex;
  align-items: center;
  &::after {
    /* display: inherit; */
    content: "";
    background-image: url(${chevron});
    margin: 0 8px;
    height: ${(props) => (props.size === "small" ? "16px" : "24px")};
    width: ${(props) => (props.size === "small" ? "16px" : "24px")};
    background-size: contain;
    background-position: center;
  }
  &:last-child::after {
    background-image: none;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: ${color.gray90};
  ${(props) => (props.size === "large" ? Body1 : Body2)}
`;

export default function Breadcrumb({ size, input }) {
  let links = input.map(({ name, url }, i, arr) => {
    if (arr.length - 1 === i) {
      return (
        <List size={size} key={name + i}>
          <Link size={size} href={url} aria-current="page">
            {name}
          </Link>
        </List>
      );
    } else {
      return (
        <List size={size} key={name + i}>
          <Link size={size} href={url}>
            {name}
          </Link>
        </List>
      );
    }
  });

  return (
    <nav aria-label="Breadcrumb">
      <ol>{links}</ol>
    </nav>
  );
}

Breadcrumb.propTypes = {
  input: PropTypes.array,
  size: PropTypes.oneOf(["large", "small"]),
};
