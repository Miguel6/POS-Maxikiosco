import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pos-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  constructor(public route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log('On Init')
    console.log(this.route.snapshot);
  }
}
