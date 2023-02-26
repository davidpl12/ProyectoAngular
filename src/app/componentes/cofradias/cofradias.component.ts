import { Component, OnInit } from '@angular/core';
import { Cofradias } from './cofradias';
import { CofradiasService } from './cofradias.service';

@Component({
  selector: 'app-cofradias',
  templateUrl: './cofradias.component.html',
  styleUrls: ['./cofradias.component.css'],
})
export class CofradiasComponent implements OnInit {
  cofradias!: Cofradias[];

  constructor(private cofradiasService: CofradiasService) { }
  ngOnInit() {
   this.cofradiasService.getCofradias().subscribe(
    cofradias => {this.cofradias = cofradias;
    console.log(this.cofradias)}
   );
  }

  delete(cofradias: Cofradias):void {
    this.cofradiasService.delete(cofradias.id).subscribe(
      response => {
        this.cofradias = this.cofradias.filter(cof => cof!==cofradias)
      }
    )
  }
}
