
import { useState, useCallback } from 'react';

function useScroll(containerRef) {
  const [scrollAmount, setScrollAmount] = useState(0);

  const scrollContainer = useCallback((amount) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += amount;
      setScrollAmount(containerRef.current.scrollLeft);
    }
  }, [containerRef]);

  const scrollRight = (amount) => {
    scrollContainer(amount);
  };

  const scrollLeft = (amount) => {
    scrollContainer(-amount);
  };

  return { scrollRight, scrollLeft, scrollAmount };
}

export default useScroll;
