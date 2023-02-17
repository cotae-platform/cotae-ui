import Column from '@src/components/basic/grid/Column';

import ButtonExample from '@src/designExamples/Button';
import DropdownExample from '@src/designExamples/Dropdown';
import InputExample from '@src/designExamples/Input';
import TableExample from '@src/designExamples/Table';

import { Wrapper } from './style';

function DesignExamplePage() {
  return (
    <Wrapper>
      <Column>
        <ButtonExample />
        <DropdownExample />
        <InputExample />
        <TableExample />
      </Column>
    </Wrapper>
  );
}

export default DesignExamplePage;
