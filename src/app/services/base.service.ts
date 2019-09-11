import {
  Observable,
  throwError as _observableThrow,
  of as _observableOf
} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export class BaseService {
  public uploadUrl: string;
  public isDebug: boolean;
  constructor() {
    if (environment.development) {
      this.uploadUrl = 'http://localhost:5000';
    } else {
      this.uploadUrl = '';
    }
    this.isDebug = environment.production ? false : true;
  }
  getBaseUrl(arg: string) {
    return this.uploadUrl;
  }
  transformOptions(options): Promise<any> {
    return new Promise((res, rej) => {
      const token = localStorage.getItem('token');
      // console.log(token)
      if (token) {
        let headers: HttpHeaders = options.headers;
        headers = headers.append('Authorization', 'Bearer ' + token);
        options.headers = headers;
      }
      res(options);
    });
  }
}

export class SwaggerException extends Error {
  message: string;
  status: number;
  response: string;
  headers: { [key: string]: any };
  result: any;

  constructor(
    message: string,
    status: number,
    response: string,
    headers: { [key: string]: any },
    result: any
  ) {
    super();

    this.message = message;
    this.status = status;
    this.response = response;
    this.headers = headers;
    this.result = result;
  }

  protected isSwaggerException = true;

  static isSwaggerException(obj: any): obj is SwaggerException {
    return obj.isSwaggerException === true;
  }
}
