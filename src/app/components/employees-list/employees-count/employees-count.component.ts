import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-employees-count',
  templateUrl: './employees-count.component.html',
  styleUrls: ['./employees-count.component.css']
})
export class EmployeesCountComponent {
  @Input() all: number
  @Input() fem: number
  @Input() masc: number
  @Output() radioButton = new EventEmitter<string>()
  
  selectedRadioButton = "all"

  constructor() {
    this.all = 0
    this.fem = 0
    this.masc = 0
  }

  radioUpdate(): void {
    this.radioButton.emit(this.selectedRadioButton)
  }

}
