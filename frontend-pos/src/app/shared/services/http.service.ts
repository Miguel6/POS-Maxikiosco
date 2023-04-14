import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Environment} from '../../../environments/environment';

@Injectable()
export class HttpService {

  private get headers(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Accept': 'application/json; charset=utf-8'
    });
  }

  constructor(private httpClient: HttpClient) {
    // window.addEventListener('storage', this.storageEventListener.bind(this));
  }

  private get baseUrl(): string {
    // return localStorage.getItem(Environment.baseUrl);
    return Environment.apiBaseUrl;
  }

  public doTypedGet<T>(service: string, params?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(`${this.baseUrl}/${service}`, {headers: this.headers, params: params});
  }

  public doTypedPost<T>(service: string, body: any): Observable<T> {
    return this.httpClient.post<T>(`${this.baseUrl}/${service}`, body, {headers: this.headers});
  }

  public doTypedPut<T>(service: string, body?: any): Observable<T> {
    return this.httpClient.put<T>(`${this.baseUrl}/${service}`, body, {headers: this.headers});
  }

  public doTypedDelete<T>(service: string, params?: HttpParams): Observable<HttpResponse<T>> {
    return this.httpClient.delete<T>(`${this.baseUrl}/${service}`, {
      headers: this.headers,
      observe: 'response',
      params: params
    });
  }

  public doGet<T>(service: string, params?: HttpParams): Promise<T> {
    return this.doTypedGet<T>(service, params).toPromise();
  }

  public doPut<T>(service: string, body?: any): Promise<T> {
    return this.doTypedPut<T>(service, body).toPromise();
  }

  public doPost<T>(service: string, body?: any): Promise<T> {
    return this.doTypedPost<T>(service, body).toPromise();
  }

  public doDelete<T>(service: string, params?: HttpParams): Promise<HttpResponse<T>> {
    return this.doTypedDelete<T>(service, params).toPromise();
  }
}
