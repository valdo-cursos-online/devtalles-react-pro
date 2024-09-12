import React from 'react'

import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
import { useShoppingCard } from '../hooks/useShoppingCart';

import '../styles/custom-styles.css'
import { products } from '../data/products.data';

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCard()

  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {/* <ProductCard className='bg-dark text-white' product={product}>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title className='text-white' title='hellow' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard> */}

        {
          products.map((product) => (
            <ProductCard
              key={product.id}
              className='bg-dark text-white'
              onChange={onProductCountChange}
              product={product}
              value={shoppingCart[product.id]?.count || 0}
            >
              <ProductImage className='custom-image' />
              <ProductTitle className='text-white' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          ))
        }
      </div>

      <div className='shopping-cart'>
        {
          Object.entries(shoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              className='bg-dark text-white'
              onChange={onProductCountChange}
              product={product}
              style={{ width: '100px' }}
              value={product.count}
            >
              <ProductImage img={product.img} className='custom-image' />
              <ProductButtons className='custom-buttons' />
            </ProductCard>
          ))
        }
      </div>
    </div>
  );
}
