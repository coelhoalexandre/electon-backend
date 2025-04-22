import CategoryInterface from './category.interface';
import ProductInterface from './product.interface';

export default interface CategoryProductInterface
  extends Omit<CategoryInterface, 'products'> {
  products: ProductInterface[];
}
