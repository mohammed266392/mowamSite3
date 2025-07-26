import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthGoService {


  private apiGo =  environment.apiGo ; // ton URL Go

  constructor(private http: HttpClient) {}


  login(credentials: LoginRequest): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<LoginResponse>(`${this.apiGo}/login`, credentials, {headers});
  }


  users(credentials: LoginRequest): Observable<LoginResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<LoginResponse>(`${this.apiGo}/users`,credentials, {headers});
  }

  // Tu peux ajouter une méthode pour sauvegarder le token si besoin :
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
