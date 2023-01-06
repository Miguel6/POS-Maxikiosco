import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {lastValueFrom} from 'rxjs';

@Injectable()
export class BreadcrumbTranslator {

  private jsonFile: any;

  constructor(private translateService: TranslateService,
              private http: HttpClient) {
    this.translateService.onLangChange.subscribe(async () => {
      await this.loadJsonFile(this.translateService.currentLang);
      console.log(this.getValue('HOME'));
    });
  }

  async loadJsonFile(language: string): Promise<void> {
    const $jsonFile = this.getDataHttp(`../../../assets/i18n/${language}-breadcrumbs.json`);
    this.jsonFile = await lastValueFrom($jsonFile);
    console.log(this.jsonFile.HOME.DESCRIPTION);
  }

  getDataHttp(url: string) {
    return this.http.get(url);
  }

  public getValue(path: string): string {
    return this.jsonFile['HOME']['DESCRIPTION'];
  }
}
