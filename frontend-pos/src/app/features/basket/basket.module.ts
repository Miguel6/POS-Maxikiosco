import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasketComponent} from './basket.component';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import {PanelOrderSelectorComponent} from './components/order-selector/panel-order-selector.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    BasketComponent,
    PanelOrderSelectorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    FormsModule
  ]
})
export class BasketModule {
}
