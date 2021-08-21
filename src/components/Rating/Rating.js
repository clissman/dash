import PropTypes from "prop-types";
import React, { useState } from "react";
import Star from "./Star";
import styled from "styled-components";

const StyledRating = styled.div`
  display: flex;
`;

export default function Rating({ totalStars = 5, size = 24, filledStars = 1 }) {
  const [count, setCount] = useState(filledStars - 1);

  var stars = [];
  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <Star
        key={i}
        onClick={() => setCount(i)}
        filled={i <= count ? 1 : 0}
        size={size}
      /> // uses "1" or "0" instead of a boolean to avoid React showing an error
    );
  }
  return <StyledRating>{stars}</StyledRating>;
}

Rating.propTypes = {
  /** The total number of stars, both filled and unfilled */
  totalStars: PropTypes.number,
  /** The size in pixels of each individual star */
  size: PropTypes.number,
  /** The initial number of stars that are filled with a color */
  filledStars: PropTypes.number,
};
