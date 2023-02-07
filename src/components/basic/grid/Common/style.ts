import styled from '@emotion/styled';

interface Props {
  direction: string;
  justifyContent: string;
  alignItems: string;
}

const Wrapper = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;

export { Wrapper };
