import { ProductCard as ProductCardHOC } from './ProductCard.component';

import { ProductButtons } from './ProductButtons.component';
import { ProductImage } from './ProductImage.component';
import { ProductTitle } from './ProductTitle.component';
import { ProductCardHOCProps } from '../interfaces/product.interface';

export { ProductButtons } from './ProductButtons.component';
export { ProductImage } from './ProductImage.component';
export { ProductTitle } from './ProductTitle.component';

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
