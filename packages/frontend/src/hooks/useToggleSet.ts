import { useState, useCallback } from "react";

export const useToggleSet = <T>(initial?: Iterable<T>) => {
  const [set, setSet] = useState<Set<T>>(new Set(initial));
  const toggle = useCallback((item: T) => {
    setSet((prev) => {
      const next = new Set(prev);
      next.has(item) ? next.delete(item) : next.add(item);
      return next;
    });
  }, []);
  const has = useCallback((item: T) => set.has(item), [set]);
  return { set, toggle, has };
};
