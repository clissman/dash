import Rating from "./Rating";
import Star from "./Star";

export default {
  title: "Components/Rating",
  component: Rating,
  subcomponents: { Star },
};

export const Default = { args: { filledStars: 3, totalStars: 5, size: 24 } };
