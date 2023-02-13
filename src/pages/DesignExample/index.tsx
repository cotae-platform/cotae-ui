import Column from '@src/components/basic/grid/Column';

import ButtonExample from '@src/designExamples/Button';
import DropdownExample from '@src/designExamples/Dropdown';
import InputExample from '@src/designExamples/Input';

import { Wrapper } from './style';

function DesignExamplePage() {
  return (
    <Wrapper>
      <Column>
        <ButtonExample />
        <DropdownExample />
        <InputExample />
      </Column>
    </Wrapper>
  );
}

export default DesignExamplePage;
