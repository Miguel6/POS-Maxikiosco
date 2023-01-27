import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LateralMenuBarComponent} from './components/lateral-menu-bar/lateral-menu-bar.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ItemMenuBarComponent} from './components/lateral-menu-bar/item-menu-bar/item-menu-bar.component';
import {PathHelper} from './providers/path-helper';
import {HttpService} from './services/http.service';
import {NavigatorHelper} from './providers/navigator-helper';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {PosTranslateLoader} from './translator/pos-translate-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SnackBarComponent} from './components/snack-bar/snack-bar.component';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {SnackBarBuilder} from './builders/snack-bar-builder';
import {MenuBarComponent} from './components/menu-bar/menu-bar.component';
import {BreadcrumbsComponent} from './components/breadcrumbs/breadcrumbs.component';
import {BreadcrumbService} from './services/breadcrumb.service';
import { ItemCardComponent } from './components/item-card/item-card.component';
import {Base64Converter} from './providers/base64-converter';

@NgModule({
  declarations: [
    LateralMenuBarComponent,
    ItemMenuBarComponent,
    SnackBarComponent,
    MenuBarComponent,
    BreadcrumbsComponent,
    ItemCardComponent
  ],
  exports: [
    MaterialModule,
    LateralMenuBarComponent,
    MenuBarComponent,
    ItemCardComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterLink,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: PosTranslateLoader,
        deps: [HttpClient],
      },
    })
  ],
  providers: [
    PathHelper,
    HttpService,
    NavigatorHelper,
    PosTranslateLoader,
    HttpClient,
    TranslateService,
    SnackBarBuilder,
    {provide: MAT_SNACK_BAR_DATA, useValue: {}},
    BreadcrumbService,
    Base64Converter
  ]
})
export class SharedModule { }
