import Checkbox from './Checkbox'

// Fix labeling, positioning, and indeterminate, highlight size / spacing between checkbox & label

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    label: "Checkbox Label",
    id: "Unique ID",
    invalid: false,
    indeterminate: false,
    size: 'medium',
    disabled: false
  },
};

export const Default = { args: {size: 'medium' } }

export const Large= { args: {size: 'large' } }

export const Small = { args: {size: 'small', } }

export const Indeterminate = { args: {indeterminate: true, defaultChecked: true } }

export const Invalid = {args:  {invalid: true } }

export const Disabled = { args: { disabled: true } };