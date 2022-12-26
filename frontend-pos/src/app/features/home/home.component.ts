import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Direction} from '@angular/cdk/bidi';
import {ToasterComponent} from '../../shared/components/toaster/toaster.component';

@Component({
  selector: 'pos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  message = 'Pizza party!!! 🍕'

  constructor(public snackBar: MatSnackBar) {

  }

  pizzaParty() {
    this.openSnackBar(this.message, 'pos-snack-bar-test');
  }

  openSnackBar(message: string, panelClass: string) {
    this.snackBar.openFromComponent(ToasterComponent , {
      duration: 10000,
      panelClass: panelClass,
    });
    // this.snackBar.openFromComponent(ToasterComponent, {
    //   data: message,
    //   panelClass: panelClass,
    //   duration: 10000
    // });
  }
}
