import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';

export const useCounter = ({ maxCount = 1 }) => {
  const [counter, setCounter] = useState(5);
  const elementToAnimate = useRef<any>(null);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, {
        duration: 0.2,
        y: -10,
        ease: 'ease.out',
      })
      .to(elementToAnimate.current, {
        duration: 1,
        y: 0,
        ease: 'bounce.out',
      })
      .pause();
  }, []);

  const tl = useRef(gsap.timeline());

  useEffect(() => {
    console.log('bong', counter);
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    elementToAnimate,
    handleClick,
  };
};
