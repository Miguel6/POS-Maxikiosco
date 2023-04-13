import {IFiltereableOptionMatSelect} from '../../../shared/models/filtereable-option-mat-select';

export class ProductSearch implements IFiltereableOptionMatSelect{
  public id: number;
  public description: string;
  public barcode: string;
  public price: number;

  public getTextToFilter(): string {
    return this.getTextToShow();
  }

  public getTextToShow(): string {
    return `${this.id} - ${this.description}`;
  }
}
