export default interface UserInterface {
  id: string;
  email: string;
  username: string;
  password: string;
  createdAt: string | Date;
  updatedAt: string | Date | null;
  deletedAt: string | Date | null;
}
