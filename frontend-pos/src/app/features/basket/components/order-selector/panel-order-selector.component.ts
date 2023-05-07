import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/order';
import {ItemCardModel} from '../../../products/models/item-card-model';
import {ListCacheManagerFactoryService} from '../../../../core/factories/list-cache-manager-factory.service';
import {ListCacheManagerService} from '../../../../core/cache/list-cache-manager.service';
import {SimpleDialogBuilder} from '../../../../core/builders/simple-dialog-builder';
import {MatDialog} from '@angular/material/dialog';
import {DialogStyle} from '../../../../core/models/dialogs/dialog-style';
import {TranslateService} from '@ngx-translate/core';
import {ButtonAction} from '../../../../core/models/dialogs/button-action';

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

  constructor(public cacheManagerService: ListCacheManagerService<Order>,
              private dialog: MatDialog,
              private translateService: TranslateService) {
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

  private showConfirmationDeleteOrder(): Promise<ButtonAction> {
    const yesText = this.translateService.instant('GENERICS.YES');
    const noText = this.translateService.instant('GENERICS.NO');
    return new SimpleDialogBuilder(this.dialog, DialogStyle.Error, yesText, noText)
      .setTitle(this.translateService.instant('BASKET.ORDER-SELECTOR.DELETE-CURRENT-ORDER.TITLE'))
      .addMessage(this.translateService.instant('BASKET.ORDER-SELECTOR.DELETE-CURRENT-ORDER.DESCRIPTION'))
      .setPanelClass('ten-pixels-padding')
      .show();
  }

  public async deleteOrder(index: number): Promise<void> {
    const result = await this.showConfirmationDeleteOrder();

    if (result === ButtonAction.Confirm) {
      this.cacheManagerService.delete(index);
      this.updateOrderIndexes();

      if (this.cacheManagerService.isEmpty()) {
        this.addNewOrder();
      }

      this.setCurrentIndex(index);
    }
  }

  private isValidIndex(index: number): boolean {
    return index >= 0 && index < this.cacheManagerService.getSize();
  }

  private setCurrentIndex(index: number): void {
    this.currentOrderIndex = this.isValidIndex(index) ? index : this.cacheManagerService.getSize() - 1;
  }

  private updateOrderIndexes(): void {
    this.orderIndexes = this.getOrderIndexes();
  }

  private getOrderIndexes(): number[] {
    return Array.from({length: this.cacheManagerService.getAllElements().length}, (_, i) => i + 1);
  }
}
