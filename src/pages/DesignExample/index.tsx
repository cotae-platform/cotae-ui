import Button from '@src/components/basic/Button';
import Column from '@src/components/basic/grid/Column';
import Row from '@src/components/basic/grid/Row';

import { Wrapper, Padding, Title } from './style';

function DesignExamplePage() {
  return (
    <Wrapper>
      <Column>
        <Row alignItems="center">
          <Title>primary</Title>
          <Padding>
            <Button color="primary" size="small" onClick={() => {}}>
              small
            </Button>
          </Padding>
          <Padding>
            <Button color="primary" size="medium" onClick={() => {}}>
              medium
            </Button>
          </Padding>
          <Padding>
            <Button color="primary" size="big" onClick={() => {}}>
              big
            </Button>
          </Padding>
        </Row>
        <Row alignItems="center">
          <Title>secondary</Title>
          <Padding>
            <Button color="secondary" size="small" onClick={() => {}}>
              small
            </Button>
          </Padding>
          <Padding>
            <Button color="secondary" size="medium" onClick={() => {}}>
              medium
            </Button>
          </Padding>
          <Padding>
            <Button color="secondary" size="big" onClick={() => {}}>
              big
            </Button>
          </Padding>
        </Row>
        <Row alignItems="center">
          <Title>tertiary</Title>
          <Padding>
            <Button color="tertiary" size="small" onClick={() => {}}>
              small
            </Button>
          </Padding>
          <Padding>
            <Button color="tertiary" size="medium" onClick={() => {}}>
              medium
            </Button>
          </Padding>
          <Padding>
            <Button color="tertiary" size="big" onClick={() => {}}>
              big
            </Button>
          </Padding>
        </Row>
      </Column>
    </Wrapper>
  );
}

export default DesignExamplePage;
