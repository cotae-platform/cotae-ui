import Button from '@src/components/basic/buttons/Button';
import Column from '@src/components/basic/Grid/Column';
import Row from '@src/components/basic/Grid/Row';

import { Wrapper, Padding, Title } from './style';

function DesignExamplePage() {
  return (
    <Wrapper>
      <Column>
        <Row alignItems="center">
          <Title>primary</Title>
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
        <Row alignItems="center">
          <Title>secondary</Title>
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
        <Row alignItems="center">
          <Title>tertiary</Title>
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
