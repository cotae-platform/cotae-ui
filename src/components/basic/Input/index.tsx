import { InputHTMLAttributes, useMemo, useState } from 'react';

import { Wrapper, OutlineInput, UnderlineInput, Placeholder, Warning } from './style';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  underline?: boolean;
  warning?: string;
  isValid?: boolean;
}

function CommonInput({
  type = 'text',
  underline = false,
  warning = '',
  isValid = true,
  value,
  ...props
}: Props) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const hasValue = useMemo(() => !!value, [value]);

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <Wrapper>
      {underline ? (
        <UnderlineInput type={type} value={value} {...props} />
      ) : (
        <>
          <Placeholder isFocused={isInputFocused} hasValue={hasValue} isValid={isValid}>
            {props.placeholder}
          </Placeholder>
          <OutlineInput
            type={type}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            isValid={isValid}
            isFocused={isInputFocused}
            {...props}
            placeholder=""
          />
        </>
      )}
      {!isValid && <Warning>{warning}</Warning>}
    </Wrapper>
  );
}

export default CommonInput;
