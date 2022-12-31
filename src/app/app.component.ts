import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Calculadora';
  operandoA!: number;
  operandoB!: number;
  resultado!: string;

  onSumar():void{
    this.resultado = `Number 1:${this.operandoA} Number 2: ${this.operandoB}`
  }
}
