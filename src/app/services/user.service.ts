import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Userinfo} from '../models/userinfo';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable()
export class UserService {

  private _refreshNeeded$ = new Subject<void>();

    //headers = new HttpHeaders()
    //.set("Content-Type", "application/json").append();

    // params = new HttpParams()
    //.set('scopeKey', '"$key"')
   

  get refreshNeeded$() {
    return this._refreshNeeded$;
  }

  constructor(private httpClient: HttpClient) { }

  getAllProfiles(): Observable<Userinfo[]> {
    return this.httpClient.get<Userinfo[]>('https://zware-ngnewapi.azurewebsites.net/api/gulati_divas_at_gmail_com/profiles');
  }


  saveUserInfo(userinfo: Userinfo): Observable<Userinfo> {
    return this.httpClient
      .post<Userinfo>('https://zware-ngnewapi.azurewebsites.net/api/gulati_divas_at_gmail_com/profiles', userinfo)
      .pipe(
        tap(() =>  {
          this._refreshNeeded$.next();
        })
      );
  }
  
}
