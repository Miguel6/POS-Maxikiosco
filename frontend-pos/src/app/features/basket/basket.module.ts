import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasketComponent} from './basket.component';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';


@NgModule({
  declarations: [
    BasketComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        TranslateModule
    ]
})
export class BasketModule {
}
