import {IFiltereableOptionMatSelect} from '../../../shared/models/filtereable-option-mat-select';
import {Injectable} from '@angular/core';
import {Adapter} from '../../../shared/models/adapter';

@Injectable()
export class ProductSearchAdapter implements Adapter<IProductSearch> {
  public adapt(toAdapt: any): IProductSearch {

    return new ProductSearch({
      id: toAdapt.id,
      description: toAdapt.description,
      price: toAdapt.price,
      barcode: toAdapt.price
    });
  }
}

export interface IProductSearch {
  id?: number;
  description?: string;
  barcode?: string;
  price?: number;
}

export class ProductSearch implements IFiltereableOptionMatSelect, IProductSearch {
  public id: number;
  public description: string;
  public barcode: string;
  public price: number;

  constructor(values: IProductSearch = {}) {
    Object.assign(this, values);
  }

  public getTextToFilter(): string {
    return this.getTextToShow();
  }

  public getTextToShow(): string {
    return `${this.id} - ${this.description}`;
  }
}
