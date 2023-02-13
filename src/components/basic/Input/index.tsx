import { InputHTMLAttributes, useMemo, useState } from 'react';

import { Wrapper, OutlineInput, UnderlineInput, Placeholder } from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  underline?: boolean;
}

function CommonInput({ type = 'text', underline = false, value, placeholder, onChange }: Props) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const hasValue = useMemo(() => !!value, [value]);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <>
      {underline ? (
        <UnderlineInput type={type} value={value} onChange={onChange} placeholder={placeholder} />
      ) : (
        <Wrapper>
          <Placeholder isAnimationOn={isInputFocused || hasValue}>{placeholder}</Placeholder>
          <OutlineInput
            type={type}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </Wrapper>
      )}
    </>
  );
}

export default CommonInput;
