import CategoryInterface from './category.interface';
import ProductInterface from './product.interface';

export default interface ProductCategoryInterface
  extends Omit<ProductInterface, 'categories'> {
  categories: CategoryInterface[];
}
