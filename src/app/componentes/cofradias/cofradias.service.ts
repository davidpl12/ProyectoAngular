import { Injectable } from '@angular/core';
import { of, Observable, map } from 'rxjs';
import { Cofradias } from './cofradias';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CofradiasService {

  private urlEndPoint:string = 'http://localhost:8080/api/cofradias'

  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})
  constructor(private http: HttpClient) { }

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
