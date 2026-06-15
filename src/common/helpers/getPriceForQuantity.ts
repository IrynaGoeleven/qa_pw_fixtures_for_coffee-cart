import { coffeeTypes } from '../../constants';

export function getPriceForQuantity(
  coffeeType: keyof typeof coffeeTypes,
  quantity: number,
): string {
  const unitPrice = coffeeTypes[coffeeType];
  return `${unitPrice.toFixed(2)} x ${quantity}`;
}

export function priceFormatStr(unitPrice: number): string {
  return `$${unitPrice.toFixed(2)}`;
}

export function totalPriceFormatStr(totalPrice: number): string {
  return `Total: $${totalPrice.toFixed(2)}`;
}
