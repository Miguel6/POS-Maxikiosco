import {IFiltereableOptionMatSelect} from '../../../shared/models/filtereable-option-mat-select';
import {Injectable} from '@angular/core';
import {Adapter} from '../../../shared/models/adapter';

@Injectable()
export class ProductSearchAdapter implements Adapter<ProductSearch> {
  public adapt(toAdapt: any): ProductSearch {

    return new ProductSearch({
      id: toAdapt.id,
      description: toAdapt.description,
      price: toAdapt.price,
      barcode: toAdapt.price
    });
  }
}

export interface IProduct {
  id?: number;
  description?: string;
  barcode?: string;
  price?: number;
}

export class ProductSearch implements IProduct, IFiltereableOptionMatSelect {
  public id: number;
  public description: string;
  public barcode: string;
  public price: number;

  constructor(values: IProduct = {}) {
    Object.assign(this, values);
  }

  public getTextToFilter(): string {
    return `${this.description}`;
  }

  public getLeftTextToShow(): string {
    return this.id.toString();
  }

  getRightTextToShow(): string {
    return this.price.toString();
  }
}
