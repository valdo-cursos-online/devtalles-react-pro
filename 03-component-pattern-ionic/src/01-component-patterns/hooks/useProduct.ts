import { useEffect, useRef, useState } from 'react';
import { onChangeArgs, Product } from '../interfaces/product.interface';

interface UseProductArgs {
  product: Product;
  value?: number;
  onChange?: (args: onChangeArgs) => void;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: UseProductArgs) => {
  const [counter, setCounter] = useState(value);
  const isControlled = useRef(!!onChange);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    if (isControlled) {
      return onChange!({
        count: value,
        product,
      });
    }

    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);

    if (onChange) {
      onChange({ count: newValue, product });
    }
  };

  return {
    counter,
    increaseBy,
  };
};
