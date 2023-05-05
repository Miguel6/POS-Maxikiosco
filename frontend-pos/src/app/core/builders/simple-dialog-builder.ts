import {MatDialog} from '@angular/material/dialog';
import {GenericDialogBuilder} from './generic-dialog-builder';
import {DialogParam} from '../models/dialogs/dialog-param';
import {ButtonModel} from '../models/dialogs/button-model';
import {ButtonType} from '../models/dialogs/button-type';
import {KeyCodes} from '../models/key-codes';
import {ButtonAction} from '../models/dialogs/button-action';
import {DialogStyle} from '../models/dialogs/dialog-style';

export class SimpleDialogBuilder {

  private readonly genericDialogBuilder: GenericDialogBuilder;
  private dialogParams: DialogParam;

  constructor(public dialog: MatDialog, public dialogStyle: DialogStyle, public primaryButton: string, public secondaryButton?: string) {
    this.genericDialogBuilder = new GenericDialogBuilder(dialog);
    this.startDialog();

    if (!this.primaryButton) {
      throw Error('Primary button must be provided');
    }

    if (this.secondaryButton) {
      this.startConfirmation(this.primaryButton, this.secondaryButton, this.dialogStyle);
    } else {
      this.startInformational(this.primaryButton, this.dialogStyle);
    }
  }

  private startDialog(): void {
    this.dialogParams = new DialogParam();
    this.dialogParams.title = '';
    this.dialogParams.messages = [];
    this.dialogParams.height = 'auto';
    this.dialogParams.width = '40%';
  }

  private createPrimaryButton(buttonText: string): ButtonModel {
    return {
      type: ButtonType.Primary,
      keyCode: KeyCodes.Enter,
      name: buttonText,
      action: ButtonAction.Confirm
    };
  }

  private createSecondaryButton(buttonText: string): ButtonModel {
    return {
      type: ButtonType.Secondary,
      keyCode: KeyCodes.Escape,
      name: buttonText,
      action: ButtonAction.Cancel
    };
  }

  private startInformational(buttonText: string, dialogStyle: DialogStyle): SimpleDialogBuilder {
    this.dialogParams.buttons = [this.createPrimaryButton(buttonText)];
    this.dialogParams.dialogStyle = dialogStyle;

    return this;
  }

  private startConfirmation(primaryButtonText: string, secondaryButtonText: string, dialogStyle: DialogStyle): SimpleDialogBuilder {
    this.dialogParams.buttons =
      [this.createSecondaryButton(secondaryButtonText), this.createPrimaryButton(primaryButtonText)];
    this.dialogParams.dialogStyle = dialogStyle;

    return this;
  }

  public setTitle(title: string): SimpleDialogBuilder {
    this.dialogParams.title = title;

    return this;
  }

  public setHeight(height: string): SimpleDialogBuilder {
    this.dialogParams.height = height;

    return this;
  }

  public setWidth(width: string): SimpleDialogBuilder {
    this.dialogParams.width = width;

    return this;
  }

  public setMaxHeight(maxHeight: string): SimpleDialogBuilder {
    this.dialogParams.maxHeight = maxHeight;

    return this;
  }

  public setMaxWidth(maxWidth: string): SimpleDialogBuilder {
    this.dialogParams.maxWidth = maxWidth;

    return this;
  }

  public addMessage(message: string): SimpleDialogBuilder {
    this.dialogParams.messages.push(message);

    return this;
  }

  public addMessages(messages: string[]): SimpleDialogBuilder {
    this.dialogParams.messages = this.dialogParams.messages.concat(messages);

    return this;
  }

  public setPanelClass(panelClass: string | string[] = ''): SimpleDialogBuilder {
    this.dialogParams.panelClass = panelClass;
    return this;
  }

  public show(autoFocus: boolean = false): Promise<ButtonAction> {
    this.dialogParams.autoFocus = autoFocus;
    return this.genericDialogBuilder.show(this.dialogParams);
  }
}
