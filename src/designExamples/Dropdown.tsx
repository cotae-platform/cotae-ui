import Dropdown from '@src/components/basic/Dropdown';
import Row from '@src/components/basic/grid/Row';

import { Title, Padding } from './style';

function DropdownExample() {
  return (
    <>
      <Padding>
        <Title bold>Dropdown</Title>
      </Padding>
      <Row>
        <Padding>
          <Dropdown items={['item1', 'item2', 'item3', 'item4']} onChange={(v) => console.log(v)} />
        </Padding>
      </Row>
    </>
  );
}

export default DropdownExample;
