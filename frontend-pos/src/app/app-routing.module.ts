import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersModule} from './features/users/users.module';
import {ProductsModule} from './features/products/products.module';
import {ProvidersModule} from './features/providers/providers.module';
import {SettingsModule} from './features/settings/settings.module';
import {StatisticsModule} from './features/statistics/statistics.module';
import {BasketModule} from './features/basket/basket.module';
import {HomeModule} from './features/home/home.module';

const routes: Routes = [
  {path: 'home', loadChildren: () => HomeModule},
  {path: 'basket', loadChildren: () => BasketModule},
  {path: 'products', loadChildren: () => ProductsModule},
  {path: 'providers', loadChildren: () => ProvidersModule},
  {path: 'settings', loadChildren: () => SettingsModule},
  {path: 'statistics', loadChildren: () => StatisticsModule},
  {path: 'users', loadChildren: () => UsersModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
