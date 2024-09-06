import React from 'react'
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';

import '../styles/custom-styles.css'

const product = {
  id: '1',
  title: 'Coffee Mug - Card2',
  img: './coffee-mug.png',
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1> Shopping Store </h1>
      <hr />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <ProductCard className='bg-dark text-white' product={product}>
          <ProductCard.Image className='custom-image' />
          <ProductCard.Title className='text-white' title='hellow' />
          <ProductCard.Buttons className='custom-buttons' />
        </ProductCard>

        <ProductCard className='bg-dark text-white' product={product}>
          <ProductImage className='custom-image' />
          <ProductTitle className='text-white' />
          <ProductButtons className='custom-buttons' />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            background: '#70d1f8'
          }}
        >
          <ProductImage style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
          }} />
          <ProductTitle style={{
            fontWeight: 'bold'
          }} />
          <ProductButtons style={{
            display: 'flex',
            justifyContent: 'end'
          }} />
        </ProductCard>
      </div>
    </div>
  );
}
