import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {

  bmi: number;
  result: string = '';
  interpretacion: string = '';

  constructor( private route: ActivatedRoute) { 
    this.bmi = +this.route.snapshot.paramMap.get('value');  
    console.log(this.bmi);
  }

  ngOnInit(): void {
    this.getResult(this.bmi);
  }

  getResult(bmi: number){
    if(bmi < 18.5){
      this.result = 'Peso bajo';
      this.interpretacion = 'Tu peso es bajo. Necesitas comer más.';
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
      this.result = 'Peso normal';
      this.interpretacion = 'Tu peso es normal. ¡Buen trabajo!';
    }
    else if(bmi >= 25 && bmi <= 29.9){
      this.result = 'Sobrepeso';
      this.interpretacion = 'Tienes sobrepeso. Necesitas hacer ejercicio.';
    }
    else if(bmi >= 30 && bmi <= 34.9){
      this.result = 'Obesidad grado I';
      this.interpretacion = 'Tienes obesidad grado I. Necesitas comenzar una dieta.';
    }
    else if(bmi >= 35 && bmi <= 39.9){
      this.result = 'Obesidad grado II';
      this.interpretacion = 'Tienes obesidad grado II. Necesitas tratamineto profesional.';
    }
    else if(bmi >= 40){
      this.result = 'Obesidad grado III';
      this.interpretacion = 'Tienes obesidad grado III. Necesitas Ayuda Urgente!!!';
    }
  }
}
