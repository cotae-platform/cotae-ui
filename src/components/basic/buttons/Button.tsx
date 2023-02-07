import { ReactNode } from 'react';

import { Button } from './style';

interface Props {
  type: 'primary' | 'secondary' | 'tertiary';
  size: 'big' | 'medium' | 'small';
  onClick: () => void;
  children: ReactNode;
}

function CommonButton({ size, type, onClick, children }: Props) {
  return (
    <Button className={`${size}-button ${type}`} onClick={onClick} type="button">
      {children}
    </Button>
  );
}

export default CommonButton;
