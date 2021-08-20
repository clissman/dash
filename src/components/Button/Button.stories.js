import Button from "./Button";
import HeartOutline from "../Icons/HeartOutline";
import HeartFill from "../Icons/HeartFill";
import Loading from "../Loading/Loading";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    size: "medium",
    variant: "primary",
    isLoading: false,
    disabled: false,
  },
};

export const PrimaryLarge = {
  args: { children: 'Button'},
};

export const LargeIconOnly = () => (
  <Button variant="primary" size="large" aria-label="favorite">
    <HeartOutline />
  </Button>
);

export const LargeIconAndText= () => (
  <Button variant="primary" size="large">
    <HeartOutline />
    Button
  </Button>
);

export const SmallIconAndText = () => (
  <Button variant="primary" size="small">
    <HeartOutline />
    Button
  </Button>
);

export const MediumIconAndTextDisabled = () => (
  <Button variant="primary" size="medium" disabled>
    <HeartOutline />
    Button
  </Button>
);

export const Fun = () => (
  <Button variant="transparent" size="medium">
    <HeartFill color="tomato" />
    Button
  </Button>
);

export const RegularAndLoading = () => (
  <Button variant="primary" size="medium">
    <Loading />
    Test
  </Button>
)

export const LargeAndLoading = () => (
  <Button variant="primary" size="large">
    <Loading />
    Test
  </Button>
);

export const TransparentAndLoading = () => (
  <Button variant="secondary" size="small">
    <Loading />
    Test
  </Button>
);