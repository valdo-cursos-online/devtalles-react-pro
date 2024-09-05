import { CounterAction } from '../actions/counter.action';
import { CounterState } from '../interfaces/counter.interface';

export const INITIAL_STATE: CounterState = {
  counter: 0,
  previus: 0,
  changes: 0,
};

export const counterReducer = (
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
