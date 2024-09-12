import React from 'react'

import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import { products } from '../data/products.data';

import '../styles/custom-styles.css'

const product = products[0]

export const ShoppingPage = () => {
  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <div>
        <ProductCard
          key={product.id}
          product={product}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {
            ({ count, isMaxCountReached, reset, increaseBy }) => (
              <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
              </>
            )
          }
        </ProductCard>
      </div>
    </div>
  );
}
