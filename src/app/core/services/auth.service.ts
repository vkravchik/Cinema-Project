import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.apiUrl;
  tokenKey = environment.tokenKey;
  isAuth = new BehaviorSubject(this.checkAuth());

  constructor(private http: HttpClient) { }

  login(object): Observable<any> {
    return this.http.post<any>(`${this.url}/users/login`, object);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.isAuth.next(this.checkAuth());
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey);
  }

  checkAuth(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  setToken(token): void {
    localStorage.setItem(this.tokenKey, token);
  }
}
