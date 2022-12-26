import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';
import {SnackbarModel} from '../../models/snackbar-model';

export const SnackBarConstants = {
  openingBoldTag: `<span class="colored">`,
  closingBoldTag: `</span>`
}

@Component({
  selector: 'pos-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SnackBarComponent {

  constructor(public snackBarRef: MatSnackBarRef<SnackBarComponent>,
              @Inject(MAT_SNACK_BAR_DATA) public data: SnackbarModel
  ) {
  }
}
