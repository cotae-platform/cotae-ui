import Button from '@src/components/basic/buttons/Button';
import Column from '@src/components/basic/Grid/Column';
import Row from '@src/components/basic/Grid/Row';

import { Wrapper, Padding } from './style';

function DesignExamplePage() {
  return (
    <Wrapper>
      <Column>
        <Row>
          <p>primary</p>
          <Padding>
            <Button type="primary" size="small" onClick={() => {}}>
              small
            </Button>
          </Padding>
          <Padding>
            <Button type="primary" size="medium" onClick={() => {}}>
              medium
            </Button>
          </Padding>
          <Padding>
            <Button type="primary" size="big" onClick={() => {}}>
              big
            </Button>
          </Padding>
        </Row>
        <Row>
          <p>secondary</p>
          <Padding>
            <Button type="secondary" size="small" onClick={() => {}}>
              small
            </Button>
          </Padding>
          <Padding>
            <Button type="secondary" size="medium" onClick={() => {}}>
              medium
            </Button>
          </Padding>
          <Padding>
            <Button type="secondary" size="big" onClick={() => {}}>
              big
            </Button>
          </Padding>
        </Row>
        <Row>
          <p>tertiary</p>
          <Padding>
            <Button type="tertiary" size="small" onClick={() => {}}>
              small
            </Button>
          </Padding>
          <Padding>
            <Button type="tertiary" size="medium" onClick={() => {}}>
              medium
            </Button>
          </Padding>
          <Padding>
            <Button type="tertiary" size="big" onClick={() => {}}>
              big
            </Button>
          </Padding>
        </Row>
      </Column>
    </Wrapper>
  );
}

export default DesignExamplePage;
