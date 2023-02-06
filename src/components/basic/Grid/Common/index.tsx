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
    <Wrapper direction={direction!} justifyContent={justifyContent!} alignItems={alignItems!}>
      {children}
    </Wrapper>
  );
}

CommonGrid.defaultProps = {
  direction: 'row',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
};

export default CommonGrid;
