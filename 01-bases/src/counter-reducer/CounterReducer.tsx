import React, { useReducer } from 'react';

import { counterReducer, INITIAL_STATE } from './reducers/counter.reducer';
import * as CounterActions from './actions/counter.action';

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch(CounterActions.doReset());
  };

  const increaseBy = (value: number) => {
    dispatch(CounterActions.doIncreaseBy(value));
  };

  return (
    <>
      <h1> Counter Reducer Segmentado </h1>
      <pre> {JSON.stringify(counterState, null, 2)} </pre>
      <button onClick={() => increaseBy(1)}> +1 </button>
      <button onClick={() => increaseBy(5)}> +5 </button>
      <button onClick={() => increaseBy(10)}> +10 </button>
      <button onClick={handleReset}> Reset </button>
    </>
  );
};
