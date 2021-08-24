import PropTypes from "prop-types";
import React from "react";
import styled, {css} from "styled-components";

const StyledCardMedia = styled.div`
  display: flex;
  align-self: stretch;
  justify-self: stretch;
  min-height: 200px;
  max-height: 400px;
  ${(props) => css`
    background-image: url(${props.url});
  `}
  width: 100%;
  object-fit: cover;
  background-position: center;
  background-size: cover;

  /* & > img {
    width: 100%;
    object-fit: cover;
    background-position: center;
  } */
`;

export default function CardMedia({ url }) {
  return <StyledCardMedia url={url} />
}

CardMedia.propTypes = {
  url: PropTypes.string.isRequired
}
