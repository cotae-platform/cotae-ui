import { ChangeEvent, useState } from 'react';

function useInput(initialState: string, pattern?: RegExp) {
  const [state, setState] = useState(initialState);
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (pattern?.test(e.target.value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setState(e.target.value);
  };

  return { state, handleChange, isValid };
}

export default useInput;
