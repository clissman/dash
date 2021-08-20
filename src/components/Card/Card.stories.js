import Card from './Card'
import CardTitle from "./CardTitle";
import CardSubtitle from "./CardSubtitle";
import CardContent from "./CardContent";
import CardMedia from "./CardMedia";
import Button from "../Button/Button"
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px 16px;
  order: 0;
  margin: 0 0 32px 0;
`;

export default {
    title: "Components/Card",
    component: Card,
    subcomponents: { CardMedia, CardTitle, CardSubtitle, CardContent },
}

export const Default = (args) => (
  <Card>
    <CardMedia />
    <Container>
      <CardTitle>Title text</CardTitle>
      <CardSubtitle>Subtitle text</CardSubtitle>
      <CardContent>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque tempore
        aut recusandae quaerat sapiente voluptatibus voluptate sunt, dolore
        praesentium neque.
      </CardContent>
    </Container>
    <Container>
        <Button>Check it out</Button>
    </Container>
  </Card>
);

