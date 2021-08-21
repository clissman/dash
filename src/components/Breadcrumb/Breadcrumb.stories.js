import Breadcrumb from './Breadcrumb'


export default {
    title: "Components/Breadcrumb",
    component: Breadcrumb,
    argTypes: {
      input: {
              control: null
          }
      }
}

const arr = [
  { name: "Home", url: "#" },
  { name: "Nested Page", url: "#" },
  { name: "Nested Page", url: "#" },
  { name: "Current Page", url: "#" },
];

export const Default = {args: {size: 'large', input: arr}}
