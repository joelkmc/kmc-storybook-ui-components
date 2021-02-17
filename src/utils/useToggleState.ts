import { useState } from 'react';

export const useToggleState = (initialValue: boolean = false) => {
  const [state, setState] = useState<boolean>(initialValue);

  const handleToggleState = (val: boolean) => {
    setState(val);
  };

  return { state, handleToggleState };
};
