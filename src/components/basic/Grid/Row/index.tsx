import React, { ReactNode } from 'react';

import CommonGrid from '../Common';

interface Props {
  justifyContent?: string;
  alignItems?: string;
  children: ReactNode;
}

function Row({ justifyContent, alignItems, children }: Props) {
  return (
    <CommonGrid justifyContent={justifyContent!} alignItems={alignItems!}>
      {children}
    </CommonGrid>
  );
}

Row.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
};

export default Row;
