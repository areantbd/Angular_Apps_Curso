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
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesCountComponent } from './components/employees-list/employees-count/employees-count.component';
import { GestorCitasComponent } from './components/gestor-citas/gestor-citas.component';
import { ListCitasComponent } from './components/gestor-citas/list-citas/list-citas.component';
import { CrearCitasComponent } from './components/gestor-citas/crear-citas/crear-citas.component';

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
    TareaComponent,
    EmployeesListComponent,
    EmployeesCountComponent,
    GestorCitasComponent,
    ListCitasComponent,
    CrearCitasComponent
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
