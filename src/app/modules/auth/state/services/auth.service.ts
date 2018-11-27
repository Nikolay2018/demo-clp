import { Injectable } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {
  }

  public getInfo(token) {
    return this.http.post(`${environment.api}/auth/info`, {
      'provider': this.cookieService.get('x-provider')
    }, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

}
