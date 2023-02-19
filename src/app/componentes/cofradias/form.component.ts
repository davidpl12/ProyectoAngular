import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cofradias } from './cofradias';
import { CofradiasService } from './cofradias.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{

  public cofradias: Cofradias = new Cofradias;

  constructor(private cofradiasService: CofradiasService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCofradia();
  }

  cargarCofradia(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.cofradiasService.getCofradia(id).subscribe((cofradias) => this.cofradias = cofradias)
      }
    });
  }

  public create(): void{
    this.cofradiasService.create(this.cofradias).subscribe(
      response => this.router.navigate(['/cofradias'])
    )

  }

  update():void{
    this.cofradiasService.update(this.cofradias)
    .subscribe(cofradias =>{ this.router.navigate(['/cofradias'])
    }

  )
  }


}
