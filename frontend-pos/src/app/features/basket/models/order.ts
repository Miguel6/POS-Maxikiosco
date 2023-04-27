import {ItemCardModel} from '../../products/models/item-card-model';

export class Order {
  public products: ItemCardModel[] = [];

  get total(): number {
    return this.products.reduce((accumulator, currentValue) => {
      const quantity = currentValue.quantity >= 0 ? currentValue.quantity : 0;
      return accumulator + currentValue.price * quantity;
    }, 0);
  }
}
