import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {BasketModule} from './features/basket/basket.module';
import {ProductsModule} from './features/products/products.module';
import {ProvidersModule} from './features/providers/providers.module';
import {SettingsModule} from './features/settings/settings.module';
import {StatisticsModule} from './features/statistics/statistics.module';
import {UsersModule} from './features/users/users.module';
import {HomeModule} from './features/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BasketModule,
    HomeModule,
    ProductsModule,
    ProvidersModule,
    SettingsModule,
    StatisticsModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
