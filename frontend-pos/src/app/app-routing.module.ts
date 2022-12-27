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
import {Path} from './shared/constants/path';

const routes: Routes = [
  {path: Path.Home, loadChildren: () => HomeModule, component: HomeComponent},
  {path: Path.Basket, loadChildren: () => BasketModule, component: BasketComponent},
  {path: Path.Products, loadChildren: () => ProductsModule, component: ProductsComponent},
  {path: Path.Providers, loadChildren: () => ProvidersModule, component: ProvidersComponent},
  {path: Path.Settings, loadChildren: () => SettingsModule, component: SettingsComponent},
  {path: Path.Statistics, loadChildren: () => StatisticsModule, component: StatisticsComponent},
  {path: Path.Users, loadChildren: () => UsersModule, component: UsersComponent},
  {path: Path.Empty, redirectTo: `/${Path.Home}`, pathMatch: 'full'},
  {path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
