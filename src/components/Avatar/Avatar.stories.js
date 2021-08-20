import React from "react";
import { Avatar } from "./Avatar";
import jane from "../../stories/assets/images/avatars/janeDonut.svg"

export default {
  title: "Components/Avatar",
  component: Avatar,
  args: {
    size: "max",
    username: "jane",
    isLoading: false,
    isStacking: false,
    src: jane,
  },
};

export const Max = { args: { size: "max" } };

export const Medium = () => <Avatars size={"medium"} />;

export const Small = () => <Avatars size={"small"} />;

export const Tiny = () => <Avatars size={"tiny"} />;

export const Stacked = () => <Stacking />;

const Avatars = ({ src, size, isLoading, isStacking, ...props }) => (
  <div>
    <Avatar
      src={jane}
      username="jane"
      size={size}
      isStacking={isStacking}
      isLoading={true}
    />
    <Avatar username="jane" size={size} isStacking={isStacking} />
    <Avatar src={jane} username="jane" size={size} isStacking={isStacking} />
  </div>
);

const Stacking = ({ isStacking }) => (
  <Avatars isStacking={true} size={"small"} />
);
