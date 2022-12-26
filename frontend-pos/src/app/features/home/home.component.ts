import {Component} from '@angular/core';
import {SnackBarBuilder} from '../../shared/builders/snack-bar-builder';

@Component({
  selector: 'pos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  message = 'Pizza party!!!'

  constructor(private snackbarBuilder: SnackBarBuilder) {

  }

  pizzaParty() {
    this.snackbarBuilder.startAsWarning().setDescription(this.message).setPanelClass('pos-snack-bar-test').setDuration(1000000).show()
    this.snackbarBuilder.startAsError().setDescription(this.message).setPanelClass('pos-snack-bar-test').setDuration(1000000).show()
  }
}
