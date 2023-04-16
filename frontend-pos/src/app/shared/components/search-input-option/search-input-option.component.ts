import {Component, Input} from '@angular/core';
import {IFiltereableOptionMatSelect} from '../../models/filtereable-option-mat-select';

@Component({
  selector: 'pos-search-input-option',
  templateUrl: './search-input-option.component.html',
  styleUrls: ['./search-input-option.component.scss']
})
export class SearchInputOptionComponent {

  @Input() value: IFiltereableOptionMatSelect;
  @Input() searchText: string;

  constructor() {
  }

  public getText(): string {
    return this.value.getTextToShow();
  }
}
