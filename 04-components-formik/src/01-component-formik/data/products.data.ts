import { Product } from '../interfaces/product.interface';

const product = {
  id: '1',
  title: 'Coffee Mug - Card2',
  img: './coffee-mug.png',
};

const product2 = {
  id: '2',
  title: 'Coffee Mug - Meme',
  img: './coffee-mug2.png',
};

export const products: Product[] = [product, product2];
