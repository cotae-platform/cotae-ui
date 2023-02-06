import { ReactNode } from 'react';

import CommonGrid from '../Common';

interface Props {
  justifyContent?: string;
  alignItems?: string;
  children: ReactNode;
}

function Column({ justifyContent, alignItems, children }: Props) {
  return (
    <CommonGrid direction="column" justifyContent={justifyContent!} alignItems={alignItems!}>
      {children}
    </CommonGrid>
  );
}

Column.defaultProps = {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
};

export default Column;
