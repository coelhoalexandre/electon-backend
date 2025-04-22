export default interface CartItemInterface {
  id: string;
  userId?: string | null;
  productId: string;
  quantity: number;
}
