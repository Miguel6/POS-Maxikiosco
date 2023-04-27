import {Component} from '@angular/core';
import {Order} from '../../models/order';

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
    this.orders.push(
      {total: 192873}
    )
    this.orders.push(
      {total: 11111111}
    )
    this.orders.push(
      {total: 2222222.32}
    )
    this.orders.push(
      {total: 3333333.45}
    )
    this.orders.push(
      {total: 4444444.56}
    )
    this.orders.push(
      {total: 55555555.67}
    )
    this.orders.push(
      {total: 6666666.78}
    )
    this.orders.push(
      {total: 777777.89}
    )
    this.orders.push(
      {total: 888888.90}
    )
    this.orders.push(
      {total: 99999999.01}
    )
    this.orders.push(
      {total: 111111.23}
    )
    this.orders.push(
      {total: 22222222.34}
    )

    this.updateOrderIndexes();
  }


  private updateOrderIndexes(): void {
    this.orderIndexes = this.getOrderIndexes();
  }

  private getOrderIndexes(): number[] {
    return Array.from({length: this.orders.length}, (_, i) => i + 1);
  }
}
