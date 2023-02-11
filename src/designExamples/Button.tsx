import Row from '@src/components/basic/grid/Row';
import { Button } from '@src/components/basic/Button/style';

import { ColorType, SizeType } from '@src/types';

import { Padding, Title } from './style';

function ButtonExample() {
  const colorList: ColorType[] = ['primary', 'secondary', 'tertiary'];
  const sizeList: SizeType[] = ['small', 'medium', 'big'];
  return (
    <>
      <Padding>
        <Title bold>Buttons</Title>
      </Padding>
      {colorList.map((color, index) => (
        <Row key={color + index.toString()} alignItems="center">
          <Title>{color}</Title>
          {sizeList.map((size) => (
            <Padding key={size + index.toString()}>
              <Button color={color} size={size} onClick={() => {}}>
                {size}
              </Button>
            </Padding>
          ))}
        </Row>
      ))}
    </>
  );
}

export default ButtonExample;
