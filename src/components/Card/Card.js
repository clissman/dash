import PropTypes from "prop-types";
import React from "react";
import styled, { css } from "styled-components";
import { shadow } from "../shared/styles";
import CardMedia from "./CardMedia";

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  max-width: 294px;
  border-radius: 6px;
  box-shadow: ${shadow.one};
  overflow: hidden;

  ${(props) =>
    props.mediaPosition === "bottom" &&
    css`
      flex-direction: column-reverse;
    `}
  ${(props) =>
    props.mediaPosition === "left" &&
    css`
      flex-direction: row;
      max-width: 480px;
    `}
    ${(props) =>
    props.mediaPosition === "right" &&
    css`
      flex-direction: row-reverse;
      max-width: 480px;
    `}
`;

const Wrapper = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  align-self: stretch;
`;

export default function Card({ isLoading, mediaPosition, children }) {
  return (
    <StyledCard isLoading={isLoading} mediaPosition={mediaPosition}>
      <CardMedia
        url={
          "https://cdn.britannica.com/w:400,h:300,c:crop/28/116528-050-1CAC6728/Great-Court-Foster-and-Partners-British-Museum-2000.jpg"
        }
      />
      <Wrapper>{children}</Wrapper>
    </StyledCard>
  );
}

Card.propTypes = {
  mediaPosition: PropTypes.oneOf(["top", "bottom", "left", "right"]),
  children: PropTypes.any.isRequired,
  isLoading: PropTypes.bool,
};
