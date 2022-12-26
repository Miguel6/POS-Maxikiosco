import {SnackBarComponent} from '../components/snack-bar/snack-bar.component';
import {SnackbarModel} from '../models/snackbar-model';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import {Injectable} from '@angular/core';

export interface ISnackBarBuilder {
  startAsError(): ISnackBarBuilder;

  startAsWarning(): ISnackBarBuilder;

  startAsSuccess(): ISnackBarBuilder;

  startAsInformation(): ISnackBarBuilder;

  setDescription(description: string): ISnackBarBuilder;

  setPanelClass(panelClass: string): ISnackBarBuilder;

  setDuration(duration: number): ISnackBarBuilder;

  showDismiss(): ISnackBarBuilder;

  show(): MatSnackBarRef<any>;
}

@Injectable()
export class SnackBarBuilder implements ISnackBarBuilder {

  private type: 'Error' | 'Warning' | 'Success' | 'Information';
  private description: string;
  private panelClass: string;
  private duration: number;
  private showDismissButton: boolean;

  constructor(public snackBar: MatSnackBar) {
  }

  setDescription(description: string): ISnackBarBuilder {
    this.description = description;
    return this;
  }

  startAsError(): ISnackBarBuilder {
    this.type = 'Error'
    return this;
  }

  startAsWarning(): ISnackBarBuilder {
    this.type = 'Warning'
    return this;
  }

  startAsSuccess(): ISnackBarBuilder {
    this.type = 'Success'
    return this;
  }

  startAsInformation(): ISnackBarBuilder {
    this.type = 'Information'
    return this;
  }

  setPanelClass(panelClass: string = 'pos-snack-bar-test'): ISnackBarBuilder {
    this.panelClass = panelClass;
    return this;
  }

  setDuration(duration: number): ISnackBarBuilder {
    this.duration = duration < 0 ? duration * -1 : duration;
    return this;
  }

  showDismiss(): ISnackBarBuilder {
    this.showDismissButton = true;
    return this;
  }

  show(): MatSnackBarRef<any> {
    const data = new SnackbarModel();
    data.description = this.description;
    data.type = this.type;
    data.showDismiss = this.showDismissButton;

    return this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.duration,
      panelClass: [this.panelClass, this.getTypeClass()],
      data: data
    });
  }

  private getTypeClass(): string {
    switch (this.type) {
      case 'Error':
        return 'error-snack-bar';
      case 'Success':
        return 'success-snack-bar';
      case 'Information':
        return 'information-snack-bar';
      case 'Warning':
        return 'warning-snack-bar';
      default:
        return 'information-snack-bar';
    }
  }
}
