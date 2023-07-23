import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
  quantity = 0
  have = ""
  want = ""
  result = 0

  currency: string[] = ["USD", "EUR", "LBR"]

  convert() {
    switch(this.have){
      case "USD":
        if (this.want === "USD") {
          this.result = this.quantity
        }
        if ( this.want === "EUR") {
          this.result = this.quantity * 0.89
        } 
        if ( this.want === "LBR") {
          this.result = this.quantity * 0.77
        }
        break;
      case "EUR":
        if (this.want === "EUR") {
          this.result = this.quantity
        }
        if ( this.want === "USD") {
          this.result = this.quantity * 1.12
        } 
        if ( this.want === "LBR") {
          this.result = this.quantity * 0.86
        }
        break;
      case "LBR":
        if (this.want === "LBR") {
          this.result = this.quantity
        }
        if ( this.want === "USD") {
          this.result = this.quantity * 1.30
        } 
        if ( this.want === "EUR") {
          this.result = this.quantity * 1.16
        }
      break;
      }
      console.log(this.result)
  }

}
