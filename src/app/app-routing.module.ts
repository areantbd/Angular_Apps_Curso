import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/home/home.component';
import { InicioComponent } from './components/bmi/inicio/inicio.component';
import { ResultadoComponent } from './components/bmi/resultado/resultado.component';
import { PianoComponent } from './components/piano/piano.component';
import { DadosComponent } from './components/dados/dados.component';
import { ConvertidorComponent } from './components/convertidor/convertidor.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { GestorCitasComponent } from './components/gestor-citas/gestor-citas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'piano', component: PianoComponent },
  { path: 'dados', component: DadosComponent },
  { path: 'tasks', component: TareaComponent },
  { path: 'convertidor', component: ConvertidorComponent },
  { path: 'bmi', component: InicioComponent },
  { path: 'bmi/resultado/:valor', component: ResultadoComponent },
  { path: 'employees', component: EmployeesListComponent },
  { path: 'citas', component: GestorCitasComponent },
  { path: '**', redirectTo: ''} //esta ruta siempre al final
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
