import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent  {

  nombreLower: string = 'nelson';
  nombreUpper: string = 'NELSON';
  nombreCompleto: string = 'NelSon CoRtES';

  fecha: Date = new Date();

}
