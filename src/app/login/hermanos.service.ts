import { Injectable } from '@angular/core';
import { of, Observable, map } from 'rxjs';
import { Hermanos } from './hermanos';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HermanosService {

  private urlEndPoint:string = 'http://localhost:8080/api/hermanos'

  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})
  constructor(private http: HttpClient) { }

  loginHermanos(hermanos: Hermanos):Observable<object>{
    console.log(hermanos);
    return this.http.post(`${this.urlEndPoint}`, hermanos);

  }

  getHermanos(): Observable<Hermanos[]> {
   // return of(COFRADIAS);
   return this.http.get<Hermanos[]>(this.urlEndPoint).pipe(
    map(response => response as Hermanos[])
   );

  }
  create(hermanos: Hermanos) : Observable<Hermanos> {
    return this.http.post<Hermanos>(this.urlEndPoint, hermanos, {headers: this.httpHeaders} );
   }

   getHermano(id: number): Observable<Hermanos> {
    // return of(COFRADIAS);
    return this.http.get<Hermanos>(`${this.urlEndPoint}Uno?id=${id}`)
   }

   update(hermanos: Hermanos): Observable<Hermanos>{
    return this.http.put<Hermanos>(`${this.urlEndPoint}/${hermanos.id}`, hermanos,{headers:this.httpHeaders} )
  }

  delete(id: any): Observable<Hermanos>{
    return this.http.delete<Hermanos>(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
  }
}
