import {TranslateLoader} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export class PosTranslateLoader implements TranslateLoader {

  constructor(private http: HttpClient) {
  }

  getTranslation(lang: string): Observable<any> {
    return this.http.get(Environment.baseUrl + `/assets/i18n/${lang}.json`)
      .pipe(catchError((_) =>
        this.http.get(Environment.baseUrl + `/assets/i18n/es.json`)));
  }
}
