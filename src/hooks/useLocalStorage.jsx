import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const storedValue = JSON.parse(localStorage.getItem(key));
    if (storedValue === null) {
      return defaultValue;
    } else {
      return storedValue;
    }
  });

  const setLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(value));
    setValue(newValue);
  };
  return [value, setLocalStorage];
}
