import CreateProductDto from './dto/create-product.dto';
import ProductInterface from '../../interfaces/product.interface';

export default class ProductModel implements ProductInterface {
  readonly id: string;
  readonly price: number;
  readonly slug: string;
  readonly name: string;
  readonly src: string;
  readonly alt: string;
  readonly stars: number;
  readonly categories: string[];
  readonly tags: string[];
  readonly colors: string[];
  readonly availability: boolean;
  readonly stockQuantity: number;
  readonly createdAt: string | Date;
  readonly updatedAt: string | Date | null;
  readonly deletedAt: string | Date | null;

  constructor(product: CreateProductDto) {
    this.name = product.name;
    this.price = product.price;
    this.src = product.src;
    this.alt = product.alt;
    this.tags = product.tags;
    this.colors = product.colors;
    this.stockQuantity = product.stockQuantity;
    this.categories = product.categories || [];
    this.slug = this.getSlug();
    this.availability = this.getAvailability();
  }

  private getSlug() {
    return this.name.replaceAll(' ', '-').toLocaleLowerCase();
  }

  private getAvailability() {
    if (this.availability) return true;

    if (this.availability === false) return false;

    if (this.stockQuantity) return true;

    return false;
  }
}
