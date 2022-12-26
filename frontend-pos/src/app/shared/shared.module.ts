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
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import { ToasterComponent } from './components/toaster/toaster.component';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    LateralMenuBarComponent,
    ItemMenuBarComponent,
    ToasterComponent
  ],
  exports: [
    MaterialModule,
    LateralMenuBarComponent,
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
    { provide: MAT_SNACK_BAR_DATA, useValue: {} }
  ]
})
export class SharedModule { }
