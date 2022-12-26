export class ButtonDialogSimpleModel {
  private buttonType: 'Primary' | 'Secondary';
  private text: string;
}

export interface IDialogSimpleBuilder {

  setTitle(title: string): IDialogSimpleBuilder;

  setDescription(description: string[]): IDialogSimpleBuilder;

  setPanelClass(panelClass: string): IDialogSimpleBuilder;

  setButtons(buttons: ButtonDialogSimpleModel[]): IDialogSimpleBuilder;

  startAsError(): IDialogSimpleBuilder;

  startAsWarning(): IDialogSimpleBuilder;

  startAsSuccess(): IDialogSimpleBuilder;

  startAsInformation(): IDialogSimpleBuilder;


}


//
// export class DialogSimpleBuilder implements IDialogSimpleBuilder {
//   dialogType: string = 'confirm-dialog' | 'informative-dialog'
//
// }
