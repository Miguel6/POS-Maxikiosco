import {NgModule} from '@angular/core';
import {Data, Route, RouterModule} from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {BasketComponent} from './features/basket/basket.component';
import {ProductsComponent} from './features/products/products.component';
import {ProvidersComponent} from './features/providers/providers.component';
import {SettingsComponent} from './features/settings/settings.component';
import {StatisticsComponent} from './features/statistics/statistics.component';
import {UsersComponent} from './features/users/users.component';
import {Path} from './shared/constants/path';
import {NewProductComponent} from './features/products/new-product/new-product.component';
import {EditProductComponent} from './features/products/edit-product/edit-product.component';

export interface CustomRoute extends Route {
  data?: CustomRouteData;
  // children?: CustomRoute[];
}

export interface CustomRouteData extends Data {
  titleTranslationKey: string;
  initOrExitState?: boolean;
  breadcrumb?: BreadcrumbEntryConfig[];
}

export interface BreadcrumbEntryConfig {
  alias?: string;
  label?: string;
  skip?: boolean;
  path: string;
  titleTranslationKey: string;
}

export type CustomRoutes = CustomRoute[];

const routes: CustomRoutes = [
  {path: Path.Home, component: HomeComponent, data: {titleTranslationKey: 'TITLE.HOME'}},
  {path: Path.Basket, component: BasketComponent, data: {titleTranslationKey: 'TITLE.BASKET'}},
  {
    path: Path.Products, children: [
      {
        path: '',
        component: ProductsComponent,
        data: {
          titleTranslationKey: 'TITLE.PRODUCTS',
          breadcrumb: [{
            path: Path.Products,
            titleTranslationKey: 'TITLE.PRODUCTS',
          }]
        }
      },
      {
        path: Path.NewProduct,
        component: NewProductComponent,
        data: {
          titleTranslationKey: 'TITLE.NEW-PRODUCT',
          breadcrumb: [
            {
              path: Path.Products,
              titleTranslationKey: 'TITLE.PRODUCTS'
            }, {
              path: Path.NewProduct,
              titleTranslationKey: 'TITLE.NEW-PRODUCT'
            }
          ]
        }
      },
      {
        path: `${Path.EditProduct}/:id`,
        component: EditProductComponent,
        data: {
          titleTranslationKey: 'TITLE.EDIT-PRODUCT',
          breadcrumb: [
            {
              path: Path.Products,
              titleTranslationKey: 'TITLE.PRODUCTS'
            }, {
              path: Path.EditProduct,
              titleTranslationKey: 'TITLE.EDIT-PRODUCT'
            }
          ]
        }
      }
    ]
  },
  {path: Path.Providers, component: ProvidersComponent, data: {titleTranslationKey: 'TITLE.PROVIDERS'}},
  {path: Path.Settings, component: SettingsComponent, data: {titleTranslationKey: 'TITLE.SETTINGS'}},
  {path: Path.Statistics, component: StatisticsComponent, data: {titleTranslationKey: 'TITLE.STATISTICS'}},
  {path: Path.Users, component: UsersComponent, data: {titleTranslationKey: 'TITLE.USERS'}},
  {path: Path.Empty, redirectTo: `/${Path.Home}`, pathMatch: 'full'},
  {path: '**', redirectTo: `/${Path.Home}`},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
