import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { color } from "../shared/styles";
import AvatarInitial from "./AvatarInitial";

export const sizes = {
  xxxs: 16,
  xxs: 20,
  xs: 24,
  s: 28,
  m: 32,
  l: 40,
  xl: 48,
  xxl: 64,
};

const Image = styled.div`
  border-radius: 50%;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  ${(props) =>
    !props.src &&
    !props.isLoading &&
    css`
      background-color: ${color.secondary};
      color: white;
    `}

  ${(props) =>
    props.isStacking &&
    css`
      border: 2px solid white;
      margin-right: -${(sizes[props.size] + 2) / 2}px;
    `}

    width: ${(props) => sizes[props.size]}px;
  height: ${(props) => sizes[props.size]}px;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export default function Avatar({
  username,
  src,
  size = "m",
  isLoading,
  isStacking,
  ...props
}) {
  let initials = username.split(" ").map((name) => {
    return name.substring(0, 1);
  });

  let avatar = src ? (
    <img src={src} alt={username} />
  ) : (
    <AvatarInitial size={size}>{initials}</AvatarInitial>
  );

  if (isLoading) avatar = <img src="skeleton.svg" alt={"loading"} />;

  return (
    <Image
      src={src}
      username={username}
      size={size}
      isLoading={isLoading}
      isStacking={isStacking}
      {...props}
    >
      {avatar}
    </Image>
  );
}

Avatar.propTypes = {
  /** Provide the size of the Avatar */
  size: PropTypes.oneOf(["xxxs", "xxs", "xs", "s", "m", "l", "xl", "xxl"]),
  /** Provide the user's name. The user's initials will be used if no image is provided */
  username: PropTypes.string.isRequired,
  /** Skeleton image if the Avatar image is loading */
  isLoading: PropTypes.bool,
  /** Adds border and margin to the Avatar so it overlaps clearly */
  isStacking: PropTypes.bool,
  /** The user's portrait. If no image is provided, initials from username are used*/
  src: PropTypes.string,
};
