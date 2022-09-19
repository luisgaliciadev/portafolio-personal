import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { PageInfo, PageInfoClass } from '../interfaces/infoPage.interface';
import { API_KEY_MAIL, URL_SERVICES } from '../config/config';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DataPageService {
  pageInfo: PageInfoClass = new PageInfoClass('','','','','','','','','','');
  URL = URL_SERVICES;
  KEY_MAIL = API_KEY_MAIL;

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

  sendMail(data) { 
    data.KEY_MAIL = this.KEY_MAIL;
    let json = JSON.stringify(data);  
    let params = json;  
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._HttpClient.post(this.URL + '/mailPortafolio/sendMail', params, {headers})
    .pipe(map((res: any) => {
      Swal.fire('Mensaje', 'Mensaje enviado correctamente.', 'success');
      return res;
    }))
    .pipe(catchError( (err: any) => {    
      Swal.fire('Mensaje', 'No se pudo enviar el mensaje.', 'warning');
      return throwError(err);
    }));
  }
}
