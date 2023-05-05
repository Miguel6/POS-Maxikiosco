import {ButtonModel} from './button-model';
import {DialogStyle} from './dialog-style';

export class DialogParam {
  public title = '';
  public messages: string[] = [];
  public buttons: ButtonModel[] = [];
  public dialogStyle: DialogStyle;
  public height = 'auto';
  public maxHeight = this.height;
  public width = 'auto';
  public maxWidth = this.width;
  public autoFocus = false;
  public panelClass: string | string[] = '';
}
