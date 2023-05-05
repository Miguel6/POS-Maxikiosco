import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/order';
import {ItemCardModel} from '../../../products/models/item-card-model';
import {ListCacheManagerFactoryService} from '../../../../core/factories/list-cache-manager-factory.service';
import {ListCacheManagerService} from '../../../../core/cache/list-cache-manager.service';

@Component({
  selector: 'pos-order-selector',
  templateUrl: './panel-order-selector.component.html',
  styleUrls: ['./panel-order-selector.component.scss'],
  providers: [{
    provide: ListCacheManagerService,
    useFactory: (factory: ListCacheManagerFactoryService<Order>) => factory.createInstance(),
    deps: [ListCacheManagerFactoryService]
  },
    {
      provide: ListCacheManagerFactoryService,
      useFactory: () => new ListCacheManagerFactoryService(undefined)
    }]
})
export class PanelOrderSelectorComponent implements OnInit {

  public currentOrderIndex = 0;
  public orderIndexes: number[] = [];

  constructor(public cacheManagerService: ListCacheManagerService<Order>) {
    const product = new ItemCardModel();
    product.id = 1;
    product.image = null;
    product.description = 'Soy un producto a la venta';
    product.barcode = '123123123123';
    product.price = 10.10;
    product.category = 'drinks';
    product.quantity = 1

    this.updateOrderIndexes();
  }

  ngOnInit() {
    this.addNewOrder();
  }

  public addNewOrder(): void {
    this.cacheManagerService.addElement(new Order());
    this.updateOrderIndexes();
  }
  
  public deleteOrder(index: number): void {
    this.cacheManagerService.delete(index);
    this.updateOrderIndexes();
    if (this.currentOrderIndex == this.cacheManagerService.getSize()) {
      this.currentOrderIndex = this.orderIndexes.length - 1;
    }
    if (this.cacheManagerService.isEmpty()) {
      this.addNewOrder();
      this.currentOrderIndex = 0;
    }
  }

  private updateOrderIndexes(): void {
    this.orderIndexes = this.getOrderIndexes();
  }

  private getOrderIndexes(): number[] {
    return Array.from({length: this.cacheManagerService.getAllElements().length}, (_, i) => i + 1);
  }
}
