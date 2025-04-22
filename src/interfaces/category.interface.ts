export default interface CategoryInterface {
  id: string;
  slug: string;
  name: string;
  src: string;
  alt: string;
  totalItems: number;
  isVisible: boolean;
  products?: string[];
  createdAt: Date | string;
  updatedAt: Date | string | null;
  deletedAt: Date | string | null;
}
