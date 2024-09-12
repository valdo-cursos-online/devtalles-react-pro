import { useEffect, useRef, useState } from 'react';
import {
  InitialValues,
  onChangeArgs,
  Product,
} from '../interfaces/product.interface';

interface UseProductArgs {
  product: Product;
  value?: number;
  initialValues?: InitialValues;
  onChange?: (args: onChangeArgs) => void;
}

const DEFAULT_VALUE = 0;

export const useProduct = ({
  onChange,
  product,
  value,
  initialValues,
}: UseProductArgs) => {
  const initialCount = initialValues?.count || value || DEFAULT_VALUE;

  const [counter, setCounter] = useState<number>(initialCount);
  const isControlled = useRef(!!onChange);

  useEffect(() => {
    setCounter(value || initialCount);
  }, [value]);

  const reset = () => {
    setCounter(initialValues?.count || initialCount);
  };

  const increaseBy = (value: number) => {
    if (isControlled.current) {
      return onChange!({
        count: value,
        product,
      });
    }

    let newValue = Math.max(counter + value, 0);
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);

    if (onChange) {
      onChange({ count: newValue, product });
    }
  };

  return {
    counter,
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    // fn()
    increaseBy,
    reset,
  };
};
