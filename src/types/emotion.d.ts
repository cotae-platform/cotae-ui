import '@emotion/react';

import { globalTheme } from '@src/styles/themes/globalTheme';

interface ColorType {
  background: string;
  color: string;
}

interface ButtonType {
  width: string;
  height: string;
}

type ThemeType = typeof globalTheme;

declare module '@emotion/react' {
  export interface Theme extends ThemeType {
    colors: {
      primary: ColorType;
      secondary: ColorType;
      tertiary: ColorType;
    };
    button: {
      big: ButtonType;
      medium: ButtonType;
      small: ButtonType;
    };
  }
}
