import {Component} from '@angular/core';
import {Order} from '../../models/order';
import {ItemCardModel} from '../../../products/models/item-card-model';

@Component({
  selector: 'pos-order-selector',
  templateUrl: './panel-order-selector.component.html',
  styleUrls: ['./panel-order-selector.component.scss']
})
export class PanelOrderSelectorComponent {

  public currentOrder = 0;
  public orders: Order[] = []
  public orderIndexes: number[] = [];

  constructor() {
    const product = new ItemCardModel();
    product.id = 1;
    product.image = null;
    product.description = 'Soy un producto a la venta';
    product.barcode = '123123123123';
    product.price = 10.10;
    product.category = 'drinks';
    product.quantity = 1

    const order = new Order();
    order.products = [product, product, product, product, product, product, product, product, product, product, product, product];
    this.orders.push(order);
    this.orders.push(new Order());

    this.updateOrderIndexes();
  }


  private updateOrderIndexes(): void {
    this.orderIndexes = this.getOrderIndexes();
  }

  private getOrderIndexes(): number[] {
    return Array.from({length: this.orders.length}, (_, i) => i + 1);
  }
}
