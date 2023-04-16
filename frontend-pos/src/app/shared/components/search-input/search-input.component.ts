import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';
import {debounceTime, distinctUntilChanged, finalize, switchMap, tap} from 'rxjs';
import {IFiltereableOptionMatSelect} from '../../models/filtereable-option-mat-select';
import {SearchProductProxyService} from '../../../features/proxies/search-product-proxy.service';

@Component({
  selector: 'pos-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent<T> implements OnChanges, OnInit, AfterViewInit {
  myControl = new FormControl('');
  filteredOptions: IFiltereableOptionMatSelect[];

  @Input() label = ''
  @Input() placeholder = ''
  @Input() prefixIcon = '';
  @Input() prefixMaterialIconStyle: 'material-icons' | 'material-icons-outlined' | 'material-icons-round' | 'material-icons-sharp' | 'material-icons-two-tone';
  @Input() showClear = true;
  @Input() options: IFiltereableOptionMatSelect[];

  @Output() onSelect = new EventEmitter<T>();

  public value = '';
  public isLoading = false;
  public errorMsg = '';

  constructor(private searchProductProxyService: SearchProductProxyService) {

  }

  ngOnInit() {

  }

  //Todo: This method could be improved trying to use the input directly
  ngOnChanges(changes: SimpleChanges) {
    if (changes.options?.currentValue) {
      this.filteredOptions = this.options;
    }
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
    });
  }

  public onFocus(event: any) {
    console.log(event);
  }

  public onClickSelect(event: any) {
    console.log('onClickSelect');
    console.log(event);
    this.onSelect.emit(event);
  }

  public onSelectionOption(event: any): void {
    this.onSelect.emit(event as T);
    console.log(this.filteredOptions);
    console.log(this.options);
  }
}
