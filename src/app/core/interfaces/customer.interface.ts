export interface ICustomer {
  id: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  observation: string;
  active: boolean;
  createdAt: string;
  updatedAt: string | null;
}