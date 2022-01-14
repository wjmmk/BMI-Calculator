import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor( private router: Router) { }

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

  calcularBMI(){
    const bmi = (this.peso / Math.pow(this.altura / 100, 2)).toFixed(2);
    this.router.navigate(['/resultado', bmi]);
  }

}
