import ButtonGroup from "./ButtonGroup";
import Button from "../Button/Button";

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  args: {
      spacing: "tight"
  },
  argTypes: {
    children: {
            control: null
        }
    }
};

export const Default = {args: {children: [<Button>One</Button>, <Button variant="secondary">Two</Button>]}}

export const SmallWithTransparent = {
  args: {
    children: [
      <Button size="small">Button One</Button>,
      <Button size="small" variant="transparent">
        Button Two
      </Button>,
    ],
  },
};
