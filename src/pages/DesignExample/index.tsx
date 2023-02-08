import Button from '@src/components/basic/Button';
import Column from '@src/components/basic/grid/Column';
import Row from '@src/components/basic/grid/Row';

import { ColorType, SizeType } from '@src/types';

import { Wrapper, Padding, Title } from './style';

function DesignExamplePage() {
  const colorList: ColorType[] = ['primary', 'secondary', 'tertiary'];
  const sizeList: SizeType[] = ['small', 'medium', 'big'];
  return (
    <Wrapper>
      <Column>
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
      </Column>
    </Wrapper>
  );
}

export default DesignExamplePage;
