import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface PlaceHolderProps {
  isAnimationOn: boolean;
}

const defaultInput = css`
  width: 200px;
  height: 30px;
  padding: 8px;

  font-size: 16px;
  font-weight: normal;

  border: none;

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const OutlineInput = styled.input`
  ${defaultInput}

  border-radius: 4px;
  border: 1px solid #9d9d9d;

  &:focus {
    border: 1px solid #023e8a;
  }
`;

const UnderlineInput = styled.input`
  ${defaultInput}

  border-bottom: 1px solid #9D9D9D;

  &:focus {
    border-bottom: 1px solid #023e8a;
  }
`;

const Placeholder = styled.p<PlaceHolderProps>`
  position: absolute;
  top: 16px;
  left: 9px;

  color: #999;
  background: #fff;

  transition: all 150ms ease-out;
  ${({ isAnimationOn }) =>
    isAnimationOn &&
    `
    transform:translateY(-23px);
    font-size:14px;
    padding: 0 4px;
  `}}
`;

export { Wrapper, OutlineInput, UnderlineInput, Placeholder };
