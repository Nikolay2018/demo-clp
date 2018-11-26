import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getInfo(token) {
    return this.http.post(`${environment.api}/auth/info`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

}
