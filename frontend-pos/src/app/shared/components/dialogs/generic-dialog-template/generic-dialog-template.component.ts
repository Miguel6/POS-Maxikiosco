import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {ButtonType} from '../../../../core/models/dialogs/button-type';
import {DialogType} from '../../../../core/models/dialogs/dialog-type';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GenericDialogData} from '../../../../core/models/dialogs/generic-dialog-data';
import {ButtonModel} from '../../../../core/models/dialogs/button-model';
import {ButtonAction} from '../../../../core/models/dialogs/button-action';
import {DialogStyle} from '../../../../core/models/dialogs/dialog-style';

@Component({
  selector: 'pos-generic-dialog-template',
  templateUrl: './generic-dialog-template.component.html',
  styleUrls: ['./generic-dialog-template.component.scss']
})
export class GenericDialogTemplateComponent implements OnInit {

  public buttonType = ButtonType;
  public dialogType = DialogType;
  public dialogStyle = DialogStyle;

  constructor(public dialogRef: MatDialogRef<GenericDialogTemplateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GenericDialogData) {
  }

  ngOnInit() {

  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const button = this.findButtonByKeyCode(event.keyCode);
    if (button) {
      this.closeDialog(button.action);
    }
  }

  private findButtonByKeyCode(keyCode: number): ButtonModel {
    return this.data.buttons.find(x => x.keyCode === keyCode);
  }

  public closeDialog(action: ButtonAction) {
    this.dialogRef.close(action);
  }
}
