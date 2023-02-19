import { Injectable } from '@angular/core';
import { of, Observable, map } from 'rxjs';
import { Cofradias } from './cofradias';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CofradiasService {

  private urlEndPoint:string = 'http://localhost:8080/api/cofradias'
  constructor(private htpp: HttpClient) { }

  getCofradias(): Observable<Cofradias[]> {
   // return of(COFRADIAS);
   return this.htpp.get<Cofradias[]>(this.urlEndPoint).pipe(
    map(response => response as Cofradias[])
   );
  }
}
