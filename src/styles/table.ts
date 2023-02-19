import { css } from '@emotion/react';

const tableGlobalCss = css`
  th {
    border: 1px solid #d9d9d9;
  }
  td {
    border: 1px solid #d9d9d9;
  }
  /* 
  tr:nth-child(even) {
    background-color: pink;
  } */
  thead {
    background-color: #023e8a;
    color: white;
    height: 30px;
    line-height: 30px;
  }
`;

export { tableGlobalCss };
