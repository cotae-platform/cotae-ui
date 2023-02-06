import { css } from '@emotion/react';

import { resetStyle } from './reset';
import { buttonGlobalCss } from './button';
import { colorCss } from './color';
const globalStyle = css`
  ${resetStyle}
  ${buttonGlobalCss}
  ${colorCss}
`;

export { globalStyle };
