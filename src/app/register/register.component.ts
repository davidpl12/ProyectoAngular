import { Component, OnInit } from '@angular/core';
import { Hermanos } from '../login/hermanos';
import { HermanosService } from '../login/hermanos.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public hermanos: Hermanos = new Hermanos;
  router: any;

  constructor(private hermanosService : HermanosService){  }
  ngOnInit(): void {

  }
  public create(): void{
    this.hermanosService.create(this.hermanos).subscribe(
      response => this.router.navigate(['/cofradias'])
    )
}
}
