export class SnackbarModel {
  public type: 'Error' | 'Warning' | 'Success' | 'Information';
  public description: string;
  public showDismiss: boolean;
}
