import {ButtonModel} from './button-model';
import {DialogStyle} from './dialog-style';

export class GenericDialogData {
  public title = '';
  public messages: string[] = [];
  public buttons: ButtonModel[] = [];
  public style: DialogStyle;
}
