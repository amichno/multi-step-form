import { ReactElement, useState } from 'react';

export function useMultistepForm(steps: ReactElement[]) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function next() {
    setCurrentIndex((index) => {
      if (index >= steps.length - 1) return i;
      else return index + 1;
    });
  }

  function back() {
    setCurrentIndex((index) => {
      if (index <= 0) return index;
      else return index - 1;
    });
  }
  return {
    currentIndex,
    step: steps[currentIndex],
    isFirstStep: currentIndex === 0,
    isLastStep: currentIndex >= steps.length - 1,
    next,
    back,
  };
}
