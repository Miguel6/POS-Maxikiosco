import {Component} from '@angular/core';
import {SnackBarBuilder} from '../../shared/builders/snack-bar-builder';
import {SnackBarConstants} from '../../shared/components/snack-bar/snack-bar.component';

@Component({
  selector: 'pos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  message = `Esto debería aparecer en ${SnackBarConstants.openingBoldTag} negrita ${SnackBarConstants.closingBoldTag} pos negrita`;

  constructor(private snackbarBuilder: SnackBarBuilder) {

  }

  pizzaParty() {
    this.snackbarBuilder
      .startAsWarning()
      .setDescription(this.message)
      .setPanelClass('pos-snack-bar-container')
      .setDuration(1000000).show()
  }
}
