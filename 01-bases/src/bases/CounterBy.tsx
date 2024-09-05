import React, { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: CounterProps) => {
  const [counterState, setCounterState] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const handleClick = (num: number) => {
    setCounterState(({ clicks, counter }) => ({
      counter: counter + num,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1> Counter By: {counterState.counter} </h1>
      <h1> Clicks: {counterState.clicks} </h1>
      <button onClick={() => handleClick(1)}> +1 </button>
      <button onClick={() => handleClick(5)}> +5 </button>
    </>
  );
};
