import { useState } from 'react';
import { Product, ProductInCart } from '../interfaces/product.interface';

export const useShoppingCard = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((prev) => {
      const productInCart: ProductInCart = prev[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...prev,
          [product.id]: productInCart,
        };
      }

      // borrar el producto
      const { [product.id]: unused, ...rest } = prev;
      return rest;
    });
  };

  return {
    onProductCountChange,
    shoppingCart,
  };
};
