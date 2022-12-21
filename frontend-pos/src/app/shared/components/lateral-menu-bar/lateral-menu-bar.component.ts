import {Component} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'pos-lateral-menu-bar',
  templateUrl: './lateral-menu-bar.component.html',
  styleUrls: ['./lateral-menu-bar.component.scss']
})
export class LateralMenuBarComponent {
  isExpanded = false;

  mouseenter() {
    this.isExpanded = true;
  }

  mouseleave() {
    this.isExpanded = false;
  }

  constructor() {

  }
}
