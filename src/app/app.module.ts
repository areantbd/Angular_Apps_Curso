import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/bmi/inicio/inicio.component';
import { ResultadoComponent } from './components/bmi/resultado/resultado.component';
import { RouterModule } from '@angular/router';
import { PianoComponent } from './components/piano/piano.component';
import { DadosComponent } from './components/dados/dados.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConvertidorComponent } from './components/convertidor/convertidor.component';
import { FormsModule } from '@angular/forms';
import { TareaComponent } from './components/tarea/tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    InicioComponent,
    ResultadoComponent,
    PianoComponent,
    DadosComponent,
    NavbarComponent,
    ConvertidorComponent,
    TareaComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
