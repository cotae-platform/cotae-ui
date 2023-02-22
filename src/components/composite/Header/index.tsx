import { useNavigate } from 'react-router-dom';

import Row from '@src/components/basic/grid/Row';

import { Wrapper, LogoIcon, Anchor, UserIcon } from './style';

interface Props {
  page: 'problem' | 'question' | 'signin' | 'signup' | 'user';
}

function Header({ page }: Props) {
  const navigate = useNavigate();

  const handleClickLogo = () => {
    navigate('/problems');
  };

  return (
    <Wrapper>
      <LogoIcon onClick={handleClickLogo} />
      <Row>
        <Anchor href="/problems" underline={page === 'problem'}>
          문제풀기
        </Anchor>
        <Anchor href="/questions" underline={page === 'question'}>
          질문하기
        </Anchor>
      </Row>
      <UserIcon />
    </Wrapper>
  );
}

export default Header;
