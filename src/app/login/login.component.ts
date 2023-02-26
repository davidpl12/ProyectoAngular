import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hermanos } from './hermanos';
import { HermanosService } from './hermanos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public hermanos: Hermanos = new Hermanos;

  constructor(private hermanosService : HermanosService){  }
  ngOnInit(): void {

  }

  userLogin(){
    console.log(this.hermanos)
    this.hermanosService.loginHermanos(this.hermanos).subscribe(data=>{
      alert("Entrado Correctamente")
    }, error=>alert("Lo siento, Introduce un correcto Usuario o Contraseña"))

  }

}
