import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {ButtonType} from '../../../../core/models/dialogs/button-type';
import {DialogType} from '../../../../core/models/dialogs/dialog-type';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {GenericDialogData} from '../../../../core/models/dialogs/generic-dialog-data';
import {ButtonModel} from '../../../../core/models/dialogs/button-model';
import {ButtonAction} from '../../../../core/models/dialogs/button-action';

@Component({
  selector: 'pos-generic-dialog-template',
  templateUrl: './generic-dialog-template.component.html',
  styleUrls: ['./generic-dialog-template.component.scss']
})
export class GenericDialogTemplateComponent implements OnInit {

  public buttonType = ButtonType;
  public dialogType = DialogType;

  constructor(public dialogRef: MatDialogRef<GenericDialogTemplateComponent>,
              @Inject(MAT_DIALOG_DATA) public data: GenericDialogData) {
  }

  ngOnInit() {

  }

  @HostListener('keydown', ['$event'])
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
