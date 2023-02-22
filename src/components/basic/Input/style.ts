import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface InteractionProps {
  isValid: boolean;
  isFocused: boolean;
}

interface PlaceHolderProps extends InteractionProps {
  hasValue: boolean;
}

const defaultInput = css`
  width: 300px;
  height: 30px;
  padding: 8px;

  font-size: 16px;
  font-weight: normal;

  border: none;

  transition: all 150ms ease-out;

  &:focus {
    outline: none;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const OutlineInput = styled.input<InteractionProps>`
  ${defaultInput}

  border-radius: 4px;
  border: 1px solid
    ${({ theme, isFocused, isValid }) =>
      isValid ? (isFocused ? '#023e8a' : '#9d9d9d') : theme.colors.tertiary.background};

  &:focus {
    border: 1px solid
      ${({ theme, isFocused, isValid }) =>
        isValid ? (isFocused ? '#023e8a' : '#9d9d9d') : theme.colors.tertiary.background};
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
  ${({ theme, isFocused, hasValue, isValid }) =>
    (isFocused || hasValue) &&
    `
    transform: translateY(-22px);
    font-size:14px;
    padding: 0 4px;
    color: ${isValid ? (isFocused ? '#023e8a' : '#9D9D9D') : theme.colors.tertiary.background};
  `}}
`;

const Warning = styled.p`
  position: absolute;
  bottom: -14px;

  color: ${({ theme }) => theme.colors.tertiary.background};
  font-size: 12px;
`;

export { Wrapper, OutlineInput, UnderlineInput, Placeholder, Warning };
