import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Brand } from '../models/brand';
import "rxjs/Rx";

@Injectable()
export class BrandService {

  constructor(private http: Http) { }

  getBrand() {
    return this.http.get('http://localhost:11989/api/brands/')
      .map(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error(error);
    return Promise.reject(error);
  }
}
