export default interface ProductInterface {
  id: string;
  slug: string;
  name: string;
  price: number;
  src: string;
  alt: string;
  stars: number;
  availability: boolean;
  stockQuantity: number;
  categories?: string[];
  tags: string[];
  colors: string[];
  createdAt: Date | string;
  updatedAt: Date | string | null;
  deletedAt: Date | string | null;
}
