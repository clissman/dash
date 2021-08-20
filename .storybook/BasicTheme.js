import { create } from "@storybook/theming";
import logo from '../src/stories/assets/images/logo_temp.svg'

export default create({
  base: "light",
  brandTitle: "basic",
  brandUrl: "http://chrislissman.design",
  brandImage: logo,
  fontBase: 'Inter, sans-serif',
  fontCode: "monospace",
  linkColor: 'yellow',
});

