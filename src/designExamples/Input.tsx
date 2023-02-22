import Input from '@src/components/basic/Input';
import Row from '@src/components/basic/grid/Row';

import useInput from '@src/hooks/useInput';

import { Title, Padding } from './style';

function InputExample() {
  const {
    state: defaultState,
    handleChange: handleChangeDefault,
    isValid: isDefaultValid,
  } = useInput('', /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/);
  const { state: underlineState, handleChange: handleChangeUnderline } = useInput('', /\d+/);

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
            warning="이메일 형식이 아닙니다."
            isValid={isDefaultValid}
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
            value={underlineState}
            onChange={handleChangeUnderline}
            placeholder="검색어를 입력하세요"
          />
        </Padding>
      </Row>
    </>
  );
}

export default InputExample;
