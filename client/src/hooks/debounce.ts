import { useRef, useCallback } from "react";

export const useDebounce = (
  callback: (args?: any[]) => void,
  delay: number = 300
) => {
  const timer = useRef<NodeJS.Timeout | null>(null);

  const debounceCallback = useCallback(
    (...args: any[]) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
  return debounceCallback;
};
