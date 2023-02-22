import React, { ReactNode } from 'react';

import { Wrapper } from './style';

interface Props {
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  children: ReactNode;
}

function CommonGrid({ direction, justifyContent, alignItems, children }: Props) {
  return (
    <Wrapper
      direction={direction ?? 'row'}
      justifyContent={justifyContent ?? 'flex-start'}
      alignItems={alignItems ?? 'flex-start'}
    >
      {children}
    </Wrapper>
  );
}

export default CommonGrid;
