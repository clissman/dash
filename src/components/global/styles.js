import { css } from "styled-components";

// Color
// Typography
// Animation
// Shadow

export const color = {
  primaryDark: "#0028BA",
  primary: "#2A52E2",
  primaryLight: "#889FF1",
  primarySubtle: "#F2F5FF",

  secondaryDark: "#BA0057",
  secondary: "#DF207B",
  secondaryLight: "#EF82B7",
  secondarySubtle: "#FFF2F8",
  
  white: "#FFF",
  gray05: "#F1F3F4",
  gray10: "#E3E6E8",
  gray15: "#D6DADD",
  gray25: "#B9C0C5",
  gray55: "#69757D",
  gray60: "#5D686F",
  gray80: "#2F3537",
  gray90: "#181A1B",
  black: "#000",

  negativeDark: "#AB1A00",
  negative: "#F6532F",
  negativeLight: "#FBA28F",
  negativeSubtle: "#FFF4F2",

  positiveDark: "#00AB61",
  positive: "#36E197",
  positiveLight: "#8FF0C6",
  positiveSubtle: "#F2FFF9",

  warningDark: "#B27700",
  warning: "#FEC301",
  warningLight: "#F7E46E",
  warningSubtle: "#FFFEEE",

  informationDark: "#0051B2",
  information: "#1081BC",
  informationLight: "#6FABDA",
  informationSubtle: "#EEF6FF",
};

export const typography = {
  size: {
    h1: 90,
    h2: 67,
    h3: 51,
    h4: 38,
    h5: 28,
    h6: 21,
    subtitle1: 16,
    subtitle2: 12,
    label1: 14,
    label2: 12,
    body1: 16,
    body2: 12,
    buttonLarge: 21,
    buttonMedium: 16,
    buttonSmall: 12,
    caption: 12,
    overline: 12,
  },
  lineHeight: {
    h1: 92,
    h2: 72,
    h3: 56,
    h4: 44,
    h5: 36,
    h6: 28,
    subtitle1: 24,
    subtitle2: 18,
    label1: 17,
    label2: 15,
    body1: 24,
    body2: 18,
    buttonLarge: 21,
    buttonMedium: 16,
    buttonSmall: 12,
    caption: 15,
    overline: 40,
  },
  family: {
    primary: "Inter, Arial, Helvetica, sans-serif",
  },
  spacing: {
    body_2: 0,
    buttonLarge: 0,
    buttonMedium: 0,
    buttonSmall: 0.1,
  },
  weight: {
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
};

if (window.matchMedia("(max-width: 640px)").matches) {
  typography.size = {
    h1: typography.size.h2,
    h2: typography.size.h3,
    h3: typography.size.h4,
    h4: typography.size.h5,
    h5: typography.size.h6,
    h6: 16,
  };
  typography.lineHeight = {
    h1: typography.lineHeight.h2,
    h2: typography.lineHeight.h3,
    h3: typography.lineHeight.h4,
    h4: typography.lineHeight.h5,
    h5: typography.lineHeight.h6,
    h6: 22,
  };
}

const { family, size, lineHeight, weight, spacing } = typography;

export const Body1 = () => css`
  font-family: ${family.primary};
  font-size: ${size.body1}px;
  line-height: ${lineHeight.body1}px;
`;

export const Body2 = () => css`
  font-family: ${family.primary};
  font-size: ${size.body2}px;
  line-height: ${lineHeight.body2}px;
`;


export const ButtonSmall = () => css`
  font-family: ${family.primary};
  font-size: ${size.buttonSmall}px;
  line-height: ${lineHeight.buttonSmall}px;
  font-weight: ${weight.semiBold};
  letter-spacing: ${spacing.buttonSmall}px;
`;

export const ButtonMedium = () => css`
  font-family: ${family.primary};
  font-size: ${size.buttonMedium}px;
  line-height: ${lineHeight.buttonMedium}px;
  font-weight: ${weight.medium};
  letter-spacing: ${spacing.buttonMedium}px;
`;

export const ButtonLarge = () => css`
  font-family: ${family.primary};
  font-size: ${size.buttonLarge}px;
  line-height: ${lineHeight.buttonLarge}px;
  font-weight: ${weight.medium};
  letter-spacing: ${spacing.buttonLarge}px;
`;

export const animation = {
  fade: 0.2 + "s ease-out",
};

export const shadow = {
  one:
    "0px 5.18175px 9.78774px rgba(0, 0, 0, 0.16), 0px 1.56215px 2.95072px rgba(0, 0, 0, 0.104254), 0px 0.648835px 1.22558px rgba(0, 0, 0, 0.08), 0px 0.234671px 0.443267px rgba(0, 0, 0, 0.0557458)",
  two:
    "0px 18.9997px 32.242px rgba(0, 0, 0, 0.16), 0px 5.72787px 9.72001px rgba(0, 0, 0, 0.104254), 0px 2.37906px 4.0372px rgba(0, 0, 0, 0.08), 0px 0.86046px 1.46017px rgba(0, 0, 0, 0.0557458)",
  three:
    "0px 43.1812px 43.1812px rgba(0, 0, 0, 0.16), 0px 13.0179px 13.0179px rgba(0, 0, 0, 0.104254), 0px 5.40696px 5.40696px rgba(0, 0, 0, 0.08), 0px 1.95559px 1.95559px rgba(0, 0, 0, 0.0557458)",
  four:
    "0px 62.7567px 67.9385px rgba(0, 0, 0, 0.19), 0px 18.9193px 20.4815px rgba(0, 0, 0, 0.123802), 0px 7.85811px 8.50695px rgba(0, 0, 0, 0.095), 0px 2.84213px 3.0768px rgba(0, 0, 0, 0.0661981)",
  five:
    "0px 67px 58px rgba(0, 0, 0, 0.2), 0px 20.1985px 17.4853px rgba(0, 0, 0, 0.130318), 0px 8.38944px 7.2625px rgba(0, 0, 0, 0.1), 0px 3.0343px 2.6267px rgba(0, 0, 0, 0.0696822)",
};
