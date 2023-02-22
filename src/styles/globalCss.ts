import { css } from '@emotion/react';
import { resetStyle } from './reset';
import { fontGlobalCss } from './font';
import { tableGlobalCss } from './table';

const globalCss = css`
  ${resetStyle};
  ${fontGlobalCss};
  ${tableGlobalCss};
`;

export default globalCss;
