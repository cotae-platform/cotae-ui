import { css } from '@emotion/react';

const fontGlobalCss = css`
  @font-face{
    font-family: "NotoSans",
    font-style: normal;
    font-weight: 400;
    src:local("Noto Sans KR Regular"), local("NotoSansKR-Regular")
        url('assets/fonts/NotoSansKR-Regular.otf') format('opentype')
  }
  @font-face { 
    font-family:"NotoSans"; 
    font-style: normal;
    font-weight: 500;
    src:local("Noto Sans KR Medium"), local("NotoSansKR-Medium")
        url('assets/fonts/NotoSansKR-Medium.otf') format('opentype') 
  }
  @font-face { 
      font-family:"NotoSans"; 
      font-style: normal;
      font-weight: 600;
      src:local("Noto Sans KR Bold"), local("NotoSansKR-Bold")
          url('assets/fonts/NotoSansKR-Bold.otf') format('opentype') 
  }

  body{
    font-family: NotoSans;
    width : 100%;
    height : 100%;
    box-sizing: border-box;
  }
`;

export { fontGlobalCss };
