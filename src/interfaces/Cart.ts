import { IProduct } from 'interfaces/Product';

export interface ICart {
    amount: number;
    discount: number;
    products: Array<IProduct>;
}