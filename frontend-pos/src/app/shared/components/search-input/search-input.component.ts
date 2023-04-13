import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {map, Observable, startWith} from 'rxjs';
import {SearchProductsService} from '../../../features/basket/services/search-products.service';
import {IFiltereableOptionMatSelect} from '../../models/filtereable-option-mat-select';

@Component({
  selector: 'pos-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, AfterViewInit {
  myControl = new FormControl('');
  filteredOptions: Observable<IFiltereableOptionMatSelect[]>;

  @Input() label = ''
  @Input() placeholder = ''
  @Input() prefixIcon = '';
  @Input() prefixMaterialIconStyle: 'material-icons' | 'material-icons-outlined' | 'material-icons-round' | 'material-icons-sharp' | 'material-icons-two-tone';
  @Input() showClear = true;
  @Input() options: IFiltereableOptionMatSelect[];

  public value = '';

  constructor(private _searchProductsService: SearchProductsService) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.filteredOptions = this.myControl
      .valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
  }

  private _filter(value: string): IFiltereableOptionMatSelect[] {
    const filterValue = value.toLowerCase();
    if (!value) {
      return this.options;
    }

    return this.options?.filter(option => option.getTextToFilter().toLowerCase().includes(filterValue));
  }

  public onClickSelect(event: any) {
    console.log(event);
  }

  public onSelectionOption(event: any): void {
    console.log(event);
  }

  getHighlightedOption(option: IFiltereableOptionMatSelect): string {
    const searchText = this.myControl.value.toLowerCase();
    const regex = new RegExp(searchText, 'gi');
    const highlighted = option.getTextToShow().replace(regex, `<span class="highlighted-coincident-text-mat-option">$&</span>`);

    return highlighted;
  }
}
