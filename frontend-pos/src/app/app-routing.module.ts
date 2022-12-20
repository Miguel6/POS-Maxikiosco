import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersModule} from './features/users/users.module';
import {ProductsModule} from './features/products/products.module';
import {ProvidersModule} from './features/providers/providers.module';
import {SettingsModule} from './features/settings/settings.module';
import {StatisticsModule} from './features/statistics/statistics.module';
import {BasketModule} from './features/basket/basket.module';
import {HomeModule} from './features/home/home.module';
import {HomeComponent} from './features/home/home.component';
import {BasketComponent} from './features/basket/basket.component';
import {ProductsComponent} from './features/products/products.component';
import {ProvidersComponent} from './features/providers/providers.component';
import {SettingsComponent} from './features/settings/settings.component';
import {StatisticsComponent} from './features/statistics/statistics.component';
import {UsersComponent} from './features/users/users.component';

const routes: Routes = [
  {path: 'home', loadChildren: () => HomeModule, component: HomeComponent},
  {path: 'basket', loadChildren: () => BasketModule, component: BasketComponent},
  {path: 'products', loadChildren: () => ProductsModule, component: ProductsComponent},
  {path: 'providers', loadChildren: () => ProvidersModule, component: ProvidersComponent},
  {path: 'settings', loadChildren: () => SettingsModule, component: SettingsComponent},
  {path: 'statistics', loadChildren: () => StatisticsModule, component: StatisticsComponent},
  {path: 'users', loadChildren: () => UsersModule, component: UsersComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
