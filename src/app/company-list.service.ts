import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';

@Injectable({
  providedIn: 'root',
})
export class CompanyListService {
  private _url: string = '';
  constructor(private http: HttpClient) {}
  getCompany(): Observable<Company[]> {
    console.log('Here');
    return this.http.get<Company[]>(this._url);
  }
  // return [
  //   { id: 1, title: 'Item 1' },
  //   { id: 2, title: 'Item 2' },
  //   { id: 3, title: 'Item 3' },
  // ];
}
