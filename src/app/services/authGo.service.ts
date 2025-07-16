import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string;
  // Ajoute d'autres champs si ta réponse en contient (ex. userId, email...)
}

@Injectable({
  providedIn: 'root'
})
export class AuthGoService {
  private apiUrl = 'http://localhost:8080'; // ton URL Go

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, {
      email,
      password
    });
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
