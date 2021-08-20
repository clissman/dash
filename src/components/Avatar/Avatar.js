import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import skeleton from "../../stories/assets/images/avatars/skeleton.svg"
import { color } from "../global/styles"

export const sizes = {
  tiny: 20,
  small: 28,
  medium: 40,
  max: 64,
};

const Image = styled.div`
  border-radius: 50%;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  ${(props) =>
    (!props.src && !props.isLoading) &&
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

const Initial = styled.div`
  font-size: 36px;
  color: white;
  font-family: Arial;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Avatar = ({
  username,
  src,
  size = "medium",
  isLoading,
  isStacking,
  ...props
}) => {
  let avatar = src ? (
    <img src={src} alt={username} />
  ) : (
    <Initial>{username.substring(0, 1)}</Initial>
  );

  if (isLoading) avatar = <img src={skeleton} alt={"loading"} />;

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
};

Avatar.propTypes = {
  /** Provide the size of the avatar */
  size: PropTypes.oneOf(["tiny", "small", "medium", "max"]),
  isLoading: PropTypes.bool,
  username: PropTypes.string.isRequired,
  isStacking: PropTypes.bool,
  src: PropTypes.string,
};
