import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse,
  } from '@angular/common/http';
  import { Observable, throwError } from 'rxjs';
  import { catchError, map } from 'rxjs/operators';
  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root',
  })
export class OceanService{
    OCEAN_API: string = 'http://localhost:3001';

    httpHeaders = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS')
    .set('Access-Control-Allow-Headers', '*');
    
  constructor(private httpClient: HttpClient) {}

  GetOceans(): Observable<any> {
    let API_URL = `${this.OCEAN_API}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders }).pipe(
      map((res: any) => {
        debugger;
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
      errorMessage;
    });
  }
}