import React from "react";
import { Shadow } from "./Shadow";

export default {
  title: "Components/Shadows",
  component: Shadow,
  args: {
    shadow: 'one'
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          width: "500px",
          height: "250px",
          background: "#EAEDEE",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden"
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export const Close = { args: { shadow: 'one' } }

