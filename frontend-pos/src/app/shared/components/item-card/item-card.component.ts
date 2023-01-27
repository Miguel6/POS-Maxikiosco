import {Component, Input, OnInit} from '@angular/core';
import {Base64Converter} from '../../providers/base64-converter';
import {ItemCardModel} from '../../models/item-card-model';
import {SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'pos-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit{

  @Input() item: ItemCardModel = null;

  public imagePath: SafeResourceUrl;
  constructor(private base64Converter: Base64Converter) {
  }
  ngOnInit() {
    this.imagePath = this.base64Converter.deserializeFromBase64(this.item?.image ?? '')
  }
}
