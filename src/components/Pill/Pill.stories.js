import Pill from './Pill'
import Close from "../Icons/Close";
import Location from "../Icons/Location";

export default {
  title: "Components/Pills & Badges",
  component: Pill,
  argTypes: {
    iconLeft: {
      control: null,
    },
    iconRight: {
      control: null
    }
  },
};

export const Warning = {
  args: { children:'Pill', iconLeft: <Location />, iconRight: <Close />, shape: "badge" },
};