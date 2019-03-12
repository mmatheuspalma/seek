import { ICart } from 'interfaces/Cart';
import { IPayment } from 'interfaces/Payment';
import { IPromotion } from './Promotion';

export interface ICheckout {
    cart?: ICart;
    payment?: IPayment;

    promotion: IPromotion;
}