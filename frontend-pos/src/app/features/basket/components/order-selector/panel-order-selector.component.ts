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

  constructor() {
    this.orders.push(
      {total: 192873}
    )
  }
}
