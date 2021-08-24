import Card from "./Card";
import CardTitle from "./CardTitle";
import CardSubtitle from "./CardSubtitle";
import CardContent from "./CardContent";
import CardMedia from "./CardMedia";
import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";

export default {
  title: "Components/Card",
  component: Card,
  mediaPosition: "top",
  subcomponents: {
    CardMedia,
    CardTitle,
    CardSubtitle,
    CardContent,
    ButtonGroup,
  },
  argTypes: {
    children: {
      control: null,
    },
    mediaPosition: {
      options: ["top", "bottom", "left", "right"],
      control: { type: "radio" },
    },
  },
};


export const CardStory = ({ mediaPosition, isLoading, ...args }) => (
  <Card mediaPosition={mediaPosition} {...args}>
    <CardTitle> Title</CardTitle>
    <CardSubtitle>Subtitle text</CardSubtitle>
    <CardContent>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit excepturi
      officiis fugit sunt, commodi cum molestias at?
    </CardContent>
    <ButtonGroup spacing="veryTight">
      <Button size="small">Primary</Button>
      <Button size="small" variant="secondary">
        Secondary
      </Button>
    </ButtonGroup>
  </Card>
);







