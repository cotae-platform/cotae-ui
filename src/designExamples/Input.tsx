import Input from '@src/components/basic/Input';
import Row from '@src/components/basic/grid/Row';

import useInput from '@src/hooks/useInput';

import { Title, Padding } from './style';

function InputExample() {
  const { state: defaultState, handleChange: handleChangeDefault } = useInput('');
  const { state: UnderlineState, handleChange: handleChangeUnderline } = useInput('');

  return (
    <>
      <Padding>
        <Title bold>Input</Title>
      </Padding>
      <Row alignItems="center">
        <Title>Default</Title>
        <Padding>
          <Input
            type="email"
            value={defaultState}
            onChange={handleChangeDefault}
            placeholder="e-mail"
          />
        </Padding>
      </Row>
      <Row alignItems="center">
        <Title>Underline</Title>
        <Padding>
          <Input
            underline
            value={UnderlineState}
            onChange={handleChangeUnderline}
            placeholder="검색어를 입력하세요"
          />
        </Padding>
      </Row>
    </>
  );
}

export default InputExample;
