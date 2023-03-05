import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';
import {map, Observable, startWith} from 'rxjs';

@Component({
  selector: 'pos-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  @Input() label = ''
  @Input() placeholder = ''
  @Input() prefixIcon = '';
  @Input() prefixMaterialIconStyle: 'material-icons' | 'material-icons-outlined' | 'material-icons-round' | 'material-icons-sharp' | 'material-icons-two-tone';
  @Input() showClear = true;
  public value = '';

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
