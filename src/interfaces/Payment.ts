import { paymentMethod } from 'helpers/enums';

export interface IPayment {
    method: paymentMethod;
}