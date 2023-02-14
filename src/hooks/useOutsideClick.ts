import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';

interface Props {
  ref: MutableRefObject<unknown>;
  close: Dispatch<SetStateAction<boolean>>;
}

function useOutsideClick({ ref, close }: Props) {
  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !(ref.current as Element).contains(e.target as Node)) {
      close(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
}

export default useOutsideClick;
