import React, { useReducer } from 'react';

interface CounterState {
  counter: number;
  previus: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previus: 0,
  changes: 0,
};

type CounterAction =
  | {
      type: 'increaseBy';
      payload: { value: number };
    }
  | { type: 'reset' };

const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  const { counter, changes } = state;

  switch (action.type) {
    case 'reset':
      return INITIAL_STATE;
    case 'increaseBy':
      return {
        previus: counter,
        counter: counter + action.payload.value,
        changes: changes + 1,
      };
    default:
      return state;
  }
};

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const increaseBy = (value: number) => {
    dispatch({ type: 'increaseBy', payload: { value } });
  };

  return (
    <>
      <h1> Counter Reducer Component </h1>
      <pre> {JSON.stringify(counterState, null, 2)} </pre>
      <button onClick={() => increaseBy(1)}> +1 </button>
      <button onClick={() => increaseBy(5)}> +5 </button>
      <button onClick={() => increaseBy(10)}> +10 </button>
      <button onClick={handleReset}> Reset </button>
    </>
  );
};
