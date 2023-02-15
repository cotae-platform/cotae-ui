import { ColorType, SizeType } from '@src/types';

import { Button } from './style';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: ColorType;
  size: SizeType;
}

function CommonButton({ type = 'button', color, size, children, ...props }: Props) {
  return (
    <Button type={type} color={color} size={size} {...props}>
      {children}
    </Button>
  );
}

export default CommonButton;
