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

@NgModule({
  declarations: [
    LateralMenuBarComponent,
    ItemMenuBarComponent
  ],
  exports: [
    MaterialModule,
    LateralMenuBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterLink
  ],
  providers: [
    PathHelper,
    HttpService,
    NavigatorHelper
  ]
})
export class SharedModule { }
