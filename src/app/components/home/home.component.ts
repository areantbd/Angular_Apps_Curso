import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  buttons = [
    {path: "/piano", name: "Piano"},
    {path: "/dados", name: "Dados"},
    {path: "/tasks", name: "Tasks"},
    {path: "/bmi", name: "BMI"},
    {path: "/convertidor", name: "Convertidor"},
    {path: "/employees", name: "Empleados"},
  ]
}
