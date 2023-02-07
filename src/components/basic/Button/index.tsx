import { ReactNode } from 'react';
import cx from 'classnames';

import { Button } from './style';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  color: 'primary' | 'secondary' | 'tertiary';
  size: 'big' | 'medium' | 'small';
  onClick: () => void;
  children: ReactNode;
}

function CommonButton({ className, type = 'button', color, size, onClick, children }: Props) {
  return (
    <Button type={type} className={cx(`${size}-button`, color, className)} onClick={onClick}>
      {children}
    </Button>
  );
}

export default CommonButton;
