import styled from '@emotion/styled';

import { ColorType } from '@src/types/color';
import { SizeType } from '@src/types/size';

interface Props {
  color: ColorType;
  size: SizeType;
}

const Button = styled.button<Props>`
  width: ${({ theme, size }) => theme.button[size].width};
  height: ${({ theme, size }) => theme.button[size].height};

  background: ${({ theme, color }) => theme.colors[color].background};
  color: ${({ theme, color }) => theme.colors[color].color};
  border-radius: 4px;

  cursor: pointer;

  &:hover {
    ${({ theme, color }) =>
      color === 'primary'
        ? `background:${theme.colors.secondary.background}`
        : 'filter:brightness(75%)'};
  }
`;

export { Button };
