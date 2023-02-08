import { ReactNode } from 'react';

import { ColorType, SizeType } from '@src/types';

import { Button } from './style';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: ColorType;
  size: SizeType;
  onClick: () => void;
  children: ReactNode;
}

function CommonButton({ type = 'button', color, size, onClick, children }: Props) {
  return (
    <Button type={type} color={color} size={size} onClick={onClick}>
      {children}
    </Button>
  );
}

export default CommonButton;
