import CategoryInterface from 'src/interfaces/category.interface';
import CreateCategoryDto from './dto/create-category.dto';

export default class CategoryModel implements CategoryInterface {
  readonly id: string;
  readonly slug: string;
  readonly name: string;
  readonly src: string;
  readonly alt: string;
  readonly products: string[];
  readonly isVisible: boolean;
  readonly totalItems: number;
  readonly createdAt: string | Date;
  readonly updatedAt: string | Date | null;
  readonly deletedAt: string | Date | null;

  constructor(category: CreateCategoryDto) {
    this.name = category.name;
    this.src = category.src;
    this.alt = category.alt;
    this.isVisible = this.getIsVisible(category.isVisible);
    this.slug = this.getSlug();
    this.products = category.products || [];
    this.totalItems = category.products?.length || 0;
  }

  private getSlug() {
    return this.name.replaceAll(' ', '-').toLocaleLowerCase();
  }

  private getIsVisible(isVisible: boolean | undefined) {
    if (isVisible) return true;

    if (isVisible === false) return false;

    return true;
  }
}
