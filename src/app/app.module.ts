import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { ListarCofradiasComponent } from './componentes/listar-cofradias/listar-cofradias.component';
import { CrearCofradiasComponent } from './componentes/crear-cofradias/crear-cofradias.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PieComponent } from './componentes/pie/pie.component';

import { RouterModule, Routes } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

const appRoutes: Routes = [
  { path: 'Listar cofradias', component: ListarCofradiasComponent },
  { path: 'Crear cofradias', component: CrearCofradiasComponent },
  { path: '', redirectTo: '/Listar usuarios', pathMatch: 'full' },
  { path: '**', component: PrincipalComponent },
];
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListarCofradiasComponent,
    CrearCofradiasComponent,
    PrincipalComponent,
    PieComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatSlideToggleModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
