import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/_services/auth.service';
import { StorageService } from 'src/app/_services/storage.service';
import { EventBusService } from 'src/app/_shared/event-bus.service';
import { Cofradias } from './cofradias';
import { CofradiasService } from './cofradias.service';

@Component({
  selector: 'app-cofradias',
  templateUrl: './cofradias.component.html',
  styleUrls: ['./cofradias.component.css'],
})



export class CofradiasComponent implements OnInit {
  cofradias!: Cofradias[];
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  eventBusSub?: Subscription;

  constructor(private cofradiasService: CofradiasService,
    private storageService: StorageService,
    private authService: AuthService,
    private eventBusService: EventBusService) { }
  ngOnInit() {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
   this.cofradiasService.getCofradias().subscribe(
    cofradias => {this.cofradias = cofradias;
    console.log(this.cofradias)}
   );


  }
  logout() {
    throw new Error('Method not implemented.');
  }

  delete(cofradias: Cofradias):void {
    this.cofradiasService.delete(cofradias.id).subscribe(
      response => {
        this.cofradias = this.cofradias.filter(cof => cof!==cofradias)
      }
    )
  }
}
