import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/Empleados';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  employeesList: Empleado[] = [
    {name: "María", lastName: "Martínez", sex: "Fem", salary: 27.000},
    {name: "Juan", lastName: "Perez", sex: "Masc", salary: 25.000},
    {name: "Pepe", lastName: "Luna", sex: "Masc", salary: 20.000},
    {name: "Noelia", lastName: "Gonzalez", sex: "Fem", salary: 24.000},
    {name: "Marta", lastName: "Varela", sex: "Fem", salary: 26.000}
  ]

  selectedRadioButton = "all"

  totalEmployees(): number {
    return this.employeesList.length
  }

  femaleEmployees(): number {
    return this.employeesList.filter(list => list.sex === "Fem").length
  }

  maleEmployees(): number {
    return this.employeesList.filter(list => list.sex === "Masc").length
  }

  filteredEmployees(selectedRadio: string): void {
    this.selectedRadioButton = selectedRadio
  }

}
