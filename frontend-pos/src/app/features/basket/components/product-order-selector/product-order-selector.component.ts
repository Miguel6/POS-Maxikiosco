import {AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import {Base64Converter} from '../../../../shared/providers/base64-converter';
import {ItemCardModel} from '../../../products/models/item-card-model';

@Component({
  selector: 'pos-product-order-selector',
  templateUrl: './product-order-selector.component.html',
  styleUrls: ['./product-order-selector.component.scss']
})
export class ProductOrderSelectorComponent implements OnInit, AfterViewInit {

  @Input() product: ItemCardModel;


  @ViewChild('titleContainer') titleContainer: ElementRef<HTMLElement>;
  public imagePath: SafeResourceUrl;
  private availableWidthForAnimation = 0;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.availableWidthForAnimation = this.titleContainer?.nativeElement.clientWidth;
    this.updateWidth(this.availableWidthForAnimation);
  }

  constructor(private base64Converter: Base64Converter) {
  }

  ngOnInit() {
    this.imagePath = this.base64Converter.deserializeFromBase64(this.product?.image ?? '')
  }

  ngAfterViewInit() {
    this.availableWidthForAnimation = this.titleContainer?.nativeElement.clientWidth;
    this.updateWidth(this.availableWidthForAnimation);
  }

  public textOverflows(): boolean {
    return this.titleContainer?.nativeElement.clientWidth < this.titleContainer?.nativeElement.children[0]?.clientWidth;
  }

  private updateWidth(width: number): void {
    this.titleContainer?.nativeElement?.style?.removeProperty('--width-title')
    this.titleContainer?.nativeElement?.style?.setProperty('--width-title', width.toString())
  }
}
