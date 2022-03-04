import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent   {
  //i18nSelect
  nombre:string = 'Nelson';
  genero:string = 'masculino';

  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes:string[]= ['Maria', 'nelson','gustavo'];
  clientesMap={
    '=0': 'no tenemos ningun cliente',
    '=1': 'tenemos un cliente',
    'other': 'tenemos # clientes'
  }

  cambiarPersona(){
    this.nombre='Sofia';
    this.genero='femenino';
  }

  eliminarCliente(){
    this.clientes.pop();
  }
}
