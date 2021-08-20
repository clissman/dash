import BasicTheme from "./BasicTheme";
import { GlobalStyle } from '../src/shared/global'
import React from 'react';

 export const decorators = [
   (Story) => (
     <>
       <GlobalStyle />
       <Story />
     </>
   ),
 ];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: BasicTheme,
  },
  viewMode: 'docs',
  previewTabs: {
    canvas: {
      hidden: true,
    },
  },
};


