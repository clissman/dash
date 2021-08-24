import React from "react";
import Avatar from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
  args: {
    username: "Jane Donut",
    size: "xxl",
    src: "janeDonut.svg",
    isLoading: false,
    isStacking: false,
  },
};

export const Max = { args: { size: "xxl" } };

export const Medium = () => <Avatars size={"m"} />;

export const Small = () => <Avatars size={"s"} />;

export const Tiny = () => <Avatars size={"xxxs"} />;

export const Stacked = () => <Stacking />;

const Avatars = ({ src, size, isLoading, isStacking, username, ...props }) => (
  <div>
    <Avatar
      src="/janeDonut.svg"
      username="Jane Donut"
      size={size}
      isStacking={isStacking}
      isLoading={true}
      alt="Jane Donut"
    />
    <Avatar
      username="Jane Donut"
      size={size}
      isStacking={isStacking}
      alt="Jane Donut"
    />
    <Avatar
      src="janeDonut.svg"
      username="Jane Donut"
      size={size}
      isStacking={isStacking}
      alt="Jane Donut"
    />
  </div>
);

const Stacking = ({ isStacking }) => <Avatars isStacking={true} size={"s"} />;
