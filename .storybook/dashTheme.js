import { create } from "@storybook/theming";
import logo from "../public/logo.svg";

export default create({
  base: "light",
  brandTitle: "dash",
  brandUrl: "http://chrislissman.design",
  brandImage: logo,
  fontBase: "Inter, sans-serif",
  fontCode: "monospace",
  linkColor: "yellow",
});
