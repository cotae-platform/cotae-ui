import { ReactNode } from 'react';

interface Props {
  type: 'primary' | 'secondary' | 'tertiary';
  size: 'big' | 'medium' | 'small';
  onClick: () => void;
  children: ReactNode;
}

function Button({ size, type, onClick, children }: Props) {
  return (
    <button className={`${size}-button ${type}`} onClick={onClick} type="button">
      {children}
    </button>
  );
}

export default Button;
