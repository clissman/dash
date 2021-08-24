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
  args: { children: "Button" },
};

export const FocusedNonPointingDevice = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "space-around",
    }}
  >
    <Button
      style={{ boxShadow: "0 0 0 4px #889ff1" }}
      variant="primary"
      size="medium"
    >
      Primary
    </Button>
    <Button
      style={{ boxShadow: "0 0 0 4px #889ff1" }}
      variant="secondary"
      size="medium"
    >
      Secondary
    </Button>
    <Button
      style={{ boxShadow: "0 0 0 4px #889ff1" }}
      variant="transparent"
      size="medium"
    >
      Transparent
    </Button>
    <Button
      style={{ boxShadow: "0 0 0 4px #889ff1" }}
      variant="transparent"
      size="medium"
      isLoading
    >
      Loading
    </Button>
  </div>
);

export const IconOnly = () => (
  <Button variant="primary" size="medium" aria-label="favorite">
    <HeartOutline />
  </Button>
);

export const IconAndText = () => (
  <Button variant="primary" size="medium">
    <HeartOutline />
    Button
  </Button>
);

export const Disabled = () => (
  <Button variant="primary" size="medium" disabled>
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

export const PrimaryLoading = () => (
  <Button variant="primary" size="medium">
    <Loading />
    Button
  </Button>
);

export const TransparentLoading = () => (
  <Button variant="secondary" size="medium">
    <Loading />
    Button
  </Button>
);

export const Fun = () => (
  <Button variant="transparent" size="medium">
    <HeartFill color="tomato" />
    Button
  </Button>
);
