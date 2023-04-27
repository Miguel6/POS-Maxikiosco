import {IProduct} from '../../basket/models/product-search';

export class ItemCardModel implements IProduct {
  public id: number;
  public price: number;
  public quantity: number;
  public category: string;
  public image: string;
  public barcode: string;
  public description: string;
}
