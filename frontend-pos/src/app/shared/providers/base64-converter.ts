import {Injectable} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Injectable()
export class Base64Converter {

  constructor(private domSanitizer: DomSanitizer) {
  }

  public serializeToBase64(){}

  public deserializeFromBase64(dataInBase64: string): SafeResourceUrl{
    if (!dataInBase64) {
      return null;
    }
    return this.domSanitizer.bypassSecurityTrustResourceUrl(dataInBase64);
  }

}
