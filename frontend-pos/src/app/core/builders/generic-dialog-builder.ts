import {DialogParam} from '../models/dialogs/dialog-param';
import {ButtonAction} from '../models/dialogs/button-action';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {
  GenericDialogTemplateComponent
} from '../../shared/components/dialogs/generic-dialog-template/generic-dialog-template.component';
import {GenericDialogData} from '../models/dialogs/generic-dialog-data';

export class GenericDialogBuilder {

  constructor(private dialog: MatDialog) {
  }

  public show(dialogParams: DialogParam): Promise<ButtonAction> {
    let dialogRef: MatDialogRef<GenericDialogTemplateComponent, ButtonAction>;
    dialogRef = this.dialog.open(GenericDialogTemplateComponent,
      {
        width: dialogParams.width,
        height: dialogParams.height,
        maxWidth: dialogParams.maxWidth,
        maxHeight: dialogParams.maxHeight,
        panelClass: dialogParams.panelClass,
        data: this.createData(dialogParams)
      }
    );

    return dialogRef.afterClosed().toPromise();
  }

  private createData(dialogParam: DialogParam): GenericDialogData {
    return {
      title: dialogParam.title,
      messages: dialogParam.messages,
      buttons: dialogParam.buttons
    };
  }
}
