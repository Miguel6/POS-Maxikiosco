import {Component} from '@angular/core';
import {Order} from '../../models/order';
import {ItemCardModel} from '../../../products/models/item-card-model';
import {CacheManagerService} from '../../../../core/cache/cache-manager.service';
import {CacheManagerFactoryService} from '../../../../core/factories/cache-manager-factory.service';

@Component({
  selector: 'pos-order-selector',
  templateUrl: './panel-order-selector.component.html',
  styleUrls: ['./panel-order-selector.component.scss'],
  providers: [{
    provide: CacheManagerService,
    useFactory: (factory: CacheManagerFactoryService<number, Order>) => factory.createInstance(),
    deps: [CacheManagerFactoryService]
  },
    {
      provide: CacheManagerFactoryService,
      useFactory: () => new CacheManagerFactoryService(undefined)
    }]
})
export class PanelOrderSelectorComponent {

  public currentOrderIndex = 0;
  public orders: Order[] = []
  public orderIndexes: number[] = [];

  constructor(private cacheManagerService: CacheManagerService<number, Order>) {
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

  public addNewOrder(): void {
    this.cacheManagerService.getTTL();
  }

  public deleteOrder(index: number): void {

  }

  private updateOrderIndexes(): void {
    this.orderIndexes = this.getOrderIndexes();
  }

  private getOrderIndexes(): number[] {
    return Array.from({length: this.orders.length}, (_, i) => i + 1);
  }
}
