import {Component} from '@angular/core';
import {SnackBarBuilder} from '../../shared/builders/snack-bar-builder';

@Component({
  selector: 'pos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  message = `Esto debería aparecer en <span class="colored">negrita</span> pos negrita`;

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
