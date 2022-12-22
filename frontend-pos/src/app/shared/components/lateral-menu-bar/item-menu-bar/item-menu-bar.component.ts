import {Component, Input} from '@angular/core';

@Component({
  selector: 'pos-item-menu-bar',
  templateUrl: './item-menu-bar.component.html',
  styleUrls: ['./item-menu-bar.component.scss']
})
export class ItemMenuBarComponent {

  @Input() showText = false;
  @Input() buttonActive = false;

}
