import React, { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';

import { Product, ProductContextProps } from '../interfaces/product.interface';
import styles from '../styles/styles.module.css';

export interface Props {
  children?: ReactElement | ReactElement[];
  product: Product;
  className?: string;
  style?: CSSProperties
}

export const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
      counter,
      increaseBy,
      product
    }}>
      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children}
      </div>
    </Provider>
  );
}