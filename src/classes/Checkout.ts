import { ICheckout } from 'interfaces/Checkout';
import { ICart } from 'interfaces/Cart';
import { IProduct } from 'interfaces/Product';
import { IPromotion, IPromotionDiscount } from 'interfaces/Promotion';

export default class Checkout implements ICheckout {
    cart: ICart = {
        amount: 0,
        discount: 0,
        products: Array<IProduct>(),
    };

    promotion: IPromotion = {
        discounts: Array<IPromotionDiscount>(),
        customer: '',
    };

    constructor(checkout?: ICheckout) {
        this.promotion = checkout ? checkout.promotion : this.promotion;

        return this;
    }

    public setPromotion(promotion: IPromotion) {
        this.promotion = promotion;

        return this;
    }

    public add(product: IProduct) {
        this.cart.products.push(product);

        return this;
    }

    public remove(id: number) {
        this.cart.products = this.cart.products.filter((_: any, index: number) => index !== id);

        return this;
    }

    public total() {
        this.cart.amount = 0;
        this.cart.discount = 0;

        this.cart.amount = (this.cart.products.length)
            ? this.cart.products
                .map((product: IProduct) => {
                    const productPromotion = this.promotion && this.promotion.discounts.find((discount: any) => discount.product === product.id);
                    const productsEqual = this.cart.products.filter((item: IProduct) => item.id === product.id);

                    const discount = (productPromotion && productPromotion.quantity <= productsEqual.length)
                        ? product.amount * (productPromotion.discount / 100)
                        : 0;

                    this.cart.discount += discount;

                    return product.amount - discount;
                }).reduce((productA: number, productC: number) => productA + productC)
            : 0;

        return this.cart.amount;
    }
}