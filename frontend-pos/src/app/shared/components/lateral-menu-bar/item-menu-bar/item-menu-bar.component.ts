import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Path} from '../../../constants/path';
import {Router} from '@angular/router';

@Component({
  selector: 'pos-item-menu-bar',
  templateUrl: './item-menu-bar.component.html',
  styleUrls: ['./item-menu-bar.component.scss']
})
export class ItemMenuBarComponent {

  @Input() showText = false;
  @Input() text = '';
  @Input() url: string;

  @Output() onClick = new EventEmitter<void>();

  constructor() {}

  public click(): void {
    this.onClick.emit();
  }
}
