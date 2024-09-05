import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMO = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setCounter((prev) => Math.min(prev + 1, MAXIMO));
  };

  useEffect(() => {
    console.log('useEffect');

    if (counter < 10) {
      return;
    }

    const tl = gsap.timeline();
    tl.to(counterElement.current, {
      duration: 0.2,
      y: -10,
      ease: 'ease.out',
    }).to(counterElement.current, {
      duration: 1,
      y: 0,
      ease: 'bounce.out',
    });

    console.log('se llego al valor maximo');
  }, [counter]);

  return (
    <>
      <h1> Counter Effect: </h1>
      <h2 ref={counterElement}> {counter} </h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
