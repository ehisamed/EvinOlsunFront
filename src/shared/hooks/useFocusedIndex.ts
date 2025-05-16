import { useState } from 'react';

export function useFocusIndex() {
  const [focusedInput, setFocusedInput] = useState<number | null>(null);

  const handleFocus = (index: number) => {
    if (focusedInput !== index) {
      setFocusedInput(index);
    }
  };

  const clearFocus = () => setFocusedInput(null);

  return { focusedInput, handleFocus, clearFocus };
}
