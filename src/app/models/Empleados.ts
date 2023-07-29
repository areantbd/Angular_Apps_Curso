export class Empleado {
  name: string
  lastName: string
  sex: string
  salary: number

  constructor(name: string, lastName: string, sex: string, salary: number) {
    this.name = name
    this.lastName = lastName
    this.sex = sex
    this.salary = salary
  }
}