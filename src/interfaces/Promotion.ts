export interface IPromotion {
    discounts: Array<IPromotionDiscount>;
    customer: string;
}

export interface IPromotionDiscount {
    product: string;
    discount: number;
    quantity: number;
}