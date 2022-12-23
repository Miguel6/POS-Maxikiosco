import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {PathHelper} from '../../providers/path-helper';
import {Path} from '../../constants/path';
import {NavigatorHelper} from '../../providers/navigator-helper';

@Component({
  selector: 'pos-lateral-menu-bar',
  templateUrl: './lateral-menu-bar.component.html',
  styleUrls: ['./lateral-menu-bar.component.scss']
})
export class LateralMenuBarComponent {
  @ViewChild('sidenav', {static: false}) sidenav: MatSidenav;

  public isExpanded: boolean = false;
  public Path = Path;

  constructor(public pathHelper: PathHelper,
              public navigatorHelper: NavigatorHelper) {
  }

  mouseenter() {
    this.isExpanded = true;
  }

  mouseleave() {
    this.isExpanded = false;
  }
}
