import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LateralMenuBarComponent} from './components/lateral-menu-bar/lateral-menu-bar.component';
import {MaterialModule} from "./material/material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    LateralMenuBarComponent
  ],
  exports: [
    MaterialModule,
    LateralMenuBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule
  ]
})
export class SharedModule { }
