import { Inject, Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  private url(requestParemeter: Partial<RequestParameters>): string {
    return `${requestParemeter.baseUrl ? requestParemeter.baseUrl : this.baseUrl}/${requestParemeter.controller}${requestParemeter.action ?
      `/${requestParemeter.action}` : ""}`;
  }

  get<T>(requestParemeter: Partial<RequestParameters>, id?: string): Observable<T> {
    let url: string = "";
    if (requestParemeter.fullEndPoint)
      url = requestParemeter.fullEndPoint
    else
      url = `${this.url(requestParemeter)}${id ? `/${id}` : ""}`;

    return this.httpClient.get<T>(url, { headers: requestParemeter.headers })
  }


  post<T>(requestParemeter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requestParemeter.fullEndPoint)
      url = requestParemeter.fullEndPoint;
    else
      url = `${this.url(requestParemeter)}`

    return this.httpClient.post<T>(url, body, { headers: requestParemeter.headers });
  }


  put<T>(requestParemeter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = ""
    if (requestParemeter.fullEndPoint)
      url = requestParemeter.fullEndPoint
    else
      url = `${this.url(requestParemeter)}`

    return this.httpClient.put<T>(url, body, { headers: requestParemeter.headers });
  }


  delete<T>(requestParemeter: Partial<RequestParameters>, id: number): Observable<T> {

    let url: string = "";
    if (requestParemeter.fullEndPoint)
      url = requestParemeter.fullEndPoint
    else
      url = `${this.url(requestParemeter)}/${id}`;

    return this.httpClient.delete<T>(url, { headers: requestParemeter.headers })
  }
}





export class RequestParameters {
  controller?: string;
  action?: string;

  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}
