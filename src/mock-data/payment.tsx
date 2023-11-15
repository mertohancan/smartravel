import Card from '../assets/icons/card.png';
import Paycell from '../assets/icons/paycell.png';
import { PaymentMethods } from '../screens/checkout';

export const PAYMENT_METHODS: PaymentMethods[] = [
  {
    id: 0,
    name: 'Card',
    icon: Card,
  },
  {
    id: 2,
    name: 'Paycell',
    icon: Paycell,
  },
];
