import {Injectable} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private authUrl = `${environment.apiUrl}/auth`;

  constructor(private authenticationService: AuthenticationService,
              private http: HttpClient) {
  }

  getUserPrincipal(): Observable<User> {
    const url = `${this.authUrl}/current/` + this.authenticationService.currentAccessTokenValue.accessToken;
    return this.http.get<User>(url);
  }
}
