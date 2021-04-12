import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { PageInfo, PageInfoClass } from '../interfaces/infoPage.interface';

@Injectable({
  providedIn: 'root'
})
export class DataPageService {
  pageInfo: PageInfoClass = new PageInfoClass('','','','','','','','','','');


  constructor(
    private _HttpClient: HttpClient
  ) {
    this.getInfoPage().subscribe(
      (response: PageInfo) => {
        this.pageInfo = response;
      }
    );
  }

  getInfoPage() {
    return this._HttpClient.get('https://luisgaliciadev-default-rtdb.firebaseio.com/info_page.json')
    .pipe(map((res: any) => {
      return res;
    }))
    .pipe(catchError( (err: any) => {
      return throwError(err);
    }));
  }

  getPortafolio() {
    return this._HttpClient.get('https://luisgaliciadev-default-rtdb.firebaseio.com/portafolio.json')
    .pipe(map((res: any) => {
      return res;
    }))
    .pipe(catchError( (err: any) => {
      return throwError(err);
    }));
  }

  getPortafolioItem(id) {
    return this._HttpClient.get('https://luisgaliciadev-default-rtdb.firebaseio.com/portafolio-item/'+ id + '.json')
    .pipe(map((res: any) => {
      return res;
    }))
    .pipe(catchError( (err: any) => {
      return throwError(err);
    }));
  }

}
