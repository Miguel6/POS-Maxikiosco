import {ButtonAction} from './button-action';
import {KeyCodes} from '../key-codes';
import {ButtonType} from './button-type';

export class ButtonModel {
  public type = ButtonType.Primary;
  public keyCode: KeyCodes = null;
  public name = '';
  public action: ButtonAction = null;
}
