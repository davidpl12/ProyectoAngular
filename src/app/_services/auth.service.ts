import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Route, Router, RouterModule, Routes } from '@angular/router';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private route: Router) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(username: string, email: string, password: string, nombre:string, apellidos:string, telefono:string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signup',
      {
        username,
        email,
        password,
        nombre,
        apellidos,
        telefono
      },
      httpOptions
    );
  }

  logout() {
    window.sessionStorage.removeItem('auth-user');
    this.route.navigate(['/login']);
    window.location.reload();
   // return this.http.post(AUTH_API + 'signout', { }, httpOptions);
  }
}
