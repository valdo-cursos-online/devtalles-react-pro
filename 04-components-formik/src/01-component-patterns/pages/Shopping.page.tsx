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
          className='bg-dark text-white'
          product={product}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {
            ({ count, isMaxCountReached, reset, increaseBy }) => (
              <>
                <ProductImage className='custom-image' />
                <ProductTitle className='text-white' />
                <ProductButtons className='custom-buttons' />

                <button onClick={reset}> Reset </button>
                <button onClick={() => increaseBy(-2)}>-2</button>
                {!isMaxCountReached && <button onClick={() => increaseBy(2)}>+2</button>}
                <span>count: {count}</span>
              </>
            )
          }
        </ProductCard>
      </div>
    </div>
  );
}
