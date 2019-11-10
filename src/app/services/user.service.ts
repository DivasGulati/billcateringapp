import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Userinfo} from '../models/userinfo';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';

const BASE_ADDRESS = 'https://zware-ngnewapi.azurewebsites.net';
const key = 'gulati_divas_at_gmail_com';

@Injectable()
export class UserService {

  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  constructor(private httpClient: HttpClient) { }

  getAllProfiles(): Observable<Userinfo[]> {
    return this.httpClient.get<Userinfo[]>(`${BASE_ADDRESS}/api/${key}/profiles`);
  }


  saveUserInfo(userinfo: Userinfo): Observable<Userinfo> {
    return this.httpClient
      .post<Userinfo>(`${BASE_ADDRESS}/api/${key}/profiles`, userinfo)
      .pipe(
        tap(() =>  {
          this._refreshNeeded$.next();
        })
      );
  }
  
}
