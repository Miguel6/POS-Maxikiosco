import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

@Component({
  selector: 'pos-lateral-menu-bar',
  templateUrl: './lateral-menu-bar.component.html',
  styleUrls: ['./lateral-menu-bar.component.scss']
})
export class LateralMenuBarComponent {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;
  isExpanded: boolean = false;

  constructor() { }

  mouseenter() {
    this.isExpanded = true
  }

  mouseleave() {
    this.isExpanded = false
  }
}
