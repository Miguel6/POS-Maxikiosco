import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {NewProductComponent} from './new-product/new-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {RouterOutlet} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {ItemCardComponent} from './item-card/item-card.component';
import {SharedModule} from '../../shared/shared.module';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [
    ProductsComponent,
    NewProductComponent,
    EditProductComponent,
    ItemCardComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    TranslateModule,
    SharedModule
  ]
})
export class ProductsModule { }
