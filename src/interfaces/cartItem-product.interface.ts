import CartItemInterface from './cartItem.interface';
import ProductInterface from './product.interface';

export default interface CartItemProductInterface extends CartItemInterface {
  product: ProductInterface;
}
