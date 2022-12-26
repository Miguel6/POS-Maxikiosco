import {Component, OnDestroy} from '@angular/core';
import {SnackBarBuilder} from '../../shared/builders/snack-bar-builder';
import {SnackBarConstants} from '../../shared/components/snack-bar/snack-bar.component';
import {MatSnackBarRef} from '@angular/material/snack-bar';

@Component({
  selector: 'pos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy{
  message = `Esto debería aparecer en ${SnackBarConstants.openingBoldTag} negrita ${SnackBarConstants.closingBoldTag} pos negrita`;
  private matSnackbarRef: MatSnackBarRef<any>;
  constructor(private snackbarBuilder: SnackBarBuilder) {

  }

  ngOnDestroy() {
     this.matSnackbarRef.dismiss();
  }

  pizzaParty() {
    this.matSnackbarRef = this.snackbarBuilder
      .setDescription(this.message)
      .setPanelClass('pos-snack-bar-container')
      .setDuration(1000000)
      .startAsSuccess();
  }
}
