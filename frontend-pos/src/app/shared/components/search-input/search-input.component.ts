import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, finalize, switchMap, tap} from 'rxjs';
import {IFiltereableOptionMatSelect} from '../../models/filtereable-option-mat-select';
import {SearchProductProxyService} from '../../../features/proxies/search-product-proxy.service';

@Component({
  selector: 'pos-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, AfterViewInit {
  private readonly minLengthTerm = 3;

  myControl = new FormControl('');
  filteredOptions: IFiltereableOptionMatSelect[];

  @Input() label = ''
  @Input() placeholder = ''
  @Input() prefixIcon = '';
  @Input() prefixMaterialIconStyle: 'material-icons' | 'material-icons-outlined' | 'material-icons-round' | 'material-icons-sharp' | 'material-icons-two-tone';
  @Input() showClear = true;
  @Input() options: IFiltereableOptionMatSelect[];

  public value = '';
  public isLoading = false;
  public errorMsg = '';

  constructor(private searchProductProxyService: SearchProductProxyService) {

  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.myControl
      .valueChanges
      .pipe(
        distinctUntilChanged(),
        debounceTime(300),
        tap(() => {
          this.errorMsg = '';
          this.isLoading = true;
        }),
        switchMap(value => this.searchProductProxyService.getByDescription(value)
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      ).subscribe(result => {
      this.filteredOptions = result;
      console.log('result');
      console.log(result);
    });
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
    const searchText = this.myControl.value?.toLowerCase() ?? '';
    const regex = new RegExp(searchText, 'gi');
    // const regex = new RegExp(`${searchText.split("").map((c) => `${c}[\\w\\W]*?`).join("")}`, "i");

    const highlighted = option.getTextToShow().replace(regex, `<span class="highlighted-coincident-text-mat-option">$&</span>`);

    return highlighted;
  }
}
