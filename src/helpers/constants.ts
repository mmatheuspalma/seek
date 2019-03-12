import Checkout from 'classes/Checkout';

export const formats = {
   number: {
      BRL: {
         style: 'currency',
         currency: 'BRL'
      }
   }
};

export const StateValueDefault = {
   customer: 'UNILEVER',
   promotions: [
      {
         discounts: [
            {
               product: 'classic',
               discount: 33.3333, // equivalent to 1 item for free
               quantity: 3,
            },
         ],
         customer: 'UNILEVER',
      },
      {
         discounts: [
            {
               product: 'standout',
               discount: 7.120963497, // equivalent to $ 23 per item
               quantity: 1,
            },
         ],
         customer: 'APPLE',
      },
      {
         discounts: [
            {
               product: 'premium',
               discount: 3.797564495, // equivalent to $ 15 per item
               quantity: 4,
            },
         ],
         customer: 'NIKE',
      },
      {
         discounts: [
            {
               product: 'classic',
               discount: 20, // equivalent to 1 item for free
               quantity: 5,
            },
            {
               product: 'standout',
               discount: 4.0249, // equivalent to $ 13 per item
               quantity: 1,
            },
            {
               product: 'premium',
               discount: 1.265854832, // equivalent to $ 5 per item
               quantity: 3,
            },
         ],
         customer: 'FORD',
      },
   ],
   checkout: new Checkout(),
} as any;