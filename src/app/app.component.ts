import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'primeraentrega';
  edad = 30;
  hayError = false;
  frutas = ['manzana','pera','banana'];
  mostrarParrafo =false;
  estadoPago: 'Aceptado' | 'Rechazado' | 'Pendiente' =  'Rechazado'; // 'Aceptado' | 'Rechazado' | 'Pendiente'

  alternarParrafo() {
    this.mostrarParrafo = !this.mostrarParrafo;
  }
}
