import { Injectable } from '@angular/core';
import { of, Observable, map } from 'rxjs';
import { Cofradias } from './cofradias';
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CofradiasService implements HttpInterceptor {
  storage: any = window.sessionStorage.getItem('auth-user');
  localStorage: any;
  token: any;

  private urlEndPoint:string = 'http://localhost:8080/api/cofradias'

  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  constructor(private http: HttpClient, private router: Router) {
    if(this.storage) {
      this.localStorage = JSON.parse(this.storage);
      this.token = this.localStorage.accessToken;
      console.log('este es el localStorage', this.localStorage);
      console.log('este es el token', this.token);
    } else {
      this.router.navigate(['/login']);
    }

}

  intercept(req: HttpRequest<any>, next: HttpHandler) {


    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${this.token}`)
    });
    return next.handle(authReq);
  }

  getCofradias(): Observable<Cofradias[]> {
   // return of(COFRADIAS);
   return this.http.get<Cofradias[]>(this.urlEndPoint).pipe(
    map(response => response as Cofradias[])
   );

  }

  create(cofradias: Cofradias) : Observable<Cofradias> {
    return this.http.post<Cofradias>(this.urlEndPoint, cofradias, {headers: this.httpHeaders} );
   }

   getCofradia(id: number): Observable<Cofradias> {
    // return of(COFRADIAS);
    return this.http.get<Cofradias>(`${this.urlEndPoint}Uno?id=${id}`)
   }

   update(cofradias: Cofradias): Observable<Cofradias>{
    return this.http.put<Cofradias>(`${this.urlEndPoint}/${cofradias.id}`, cofradias,{headers:this.httpHeaders} )
  }

  delete(id: any): Observable<Cofradias>{
    return this.http.delete<Cofradias>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
