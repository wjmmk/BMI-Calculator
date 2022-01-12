import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

   edad = 25;
   peso = 60;
   altura = 170;
   sexo = 'Masculino';

  constructor() {
   }

  ngOnInit(): void {
  }

  cambiarAtura(event: any) {
    this.altura = event.target.value;
  }

  selectMasculino(){
    this.sexo = 'Masculino';
  }

  selectFemenino(){
    this.sexo = 'Femenino';
  }

  calcularIMC(){
    const imc = this.peso / (this.altura / 100) ** 2;
    console.log(imc);
    return imc;
  }

}
