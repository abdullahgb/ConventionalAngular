import {
  mergeMap as _observableMergeMap,
  catchError as _observableCatch
} from 'rxjs/operators';
import {
  Observable,
  from as _observableFrom,
  throwError as _observableThrow,
  of as _observableOf
} from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpResponseBase
} from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class Service extends BaseService {
  private http: HttpClient;
  private baseUrl: string;
  protected jsonParseReviver:
    | ((key: string, value: any) => any)
    | undefined = undefined;

  constructor(
    @Inject(HttpClient) http: HttpClient,
    @Optional() @Inject(API_BASE_URL) baseUrl?: string
  ) {
    super();
    this.http = http;
    this.baseUrl = baseUrl ? baseUrl : this.getBaseUrl('');
  }
}
