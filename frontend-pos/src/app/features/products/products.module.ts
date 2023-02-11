import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products.component';
import {NewProductComponent} from './new-product/new-product.component';
import {EditProductComponent} from './edit-product/edit-product.component';
import {RouterOutlet} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    NewProductComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    TranslateModule,
    SharedModule
  ]
})
export class ProductsModule { }
