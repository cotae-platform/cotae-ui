import { ChangeEvent, useState } from 'react';

function useInput(initialState: string) {
  const [state, setState] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value);
  };

  return { state, handleChange };
}

export default useInput;
