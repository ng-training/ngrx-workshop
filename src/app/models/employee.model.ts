import { Address } from './address.model';

export interface Employee {
  id: string;
  picture: string;
  name: string;
  email: string;
  phone: string;
  address?: Address;
  position: string;
}
