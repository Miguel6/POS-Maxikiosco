import {Component, Inject} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'pos-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent {

  constructor(public snackBarRef: MatSnackBarRef<ToasterComponent>,
              @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {
    console.log('SnackBar');
  }
}
