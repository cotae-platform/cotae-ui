import { css } from '@emotion/react';
import styled from '@emotion/styled';

import logo from '@src/assets/images/cotae-logo.svg';
import user from '@src/assets/images/user.svg';

interface UnderlineProps {
  underline?: boolean;
}

const defaultIcon = (url: string) => css`
  width: 40px;
  height: 40px;

  background: url(${url}) no-repeat center center;

  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 60px;
  padding: 0 10px;

  background: #d9d9d9;
`;

const LogoIcon = styled.i`
  ${defaultIcon(logo)}
`;

const Anchor = styled.a<UnderlineProps>`
  margin: 0 20px;

  color: #000;

  ${({ underline }) => underline && `border-bottom: 1px solid #000;`}
  cursor: pointer;
`;

const UserIcon = styled.i`
  ${defaultIcon(user)}
`;

export { Wrapper, LogoIcon, Anchor, UserIcon };
