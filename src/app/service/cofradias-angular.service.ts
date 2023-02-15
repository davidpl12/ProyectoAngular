import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CofradiasAngularService {
  private apiUrl="http://localhost:5555/usuarios";

  constructor() { }
}
