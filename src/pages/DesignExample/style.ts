import styled from '@emotion/styled';

const Wrapper = styled.div`
  padding: 20px;
`;

const Padding = styled.div`
  padding: 20px;
`;

const Title = styled.div<{ bold?: boolean }>`
  width: 100px;
  font-weight: ${(props) => (props.bold ? '700' : '500')};
`;

export { Wrapper, Padding, Title };
