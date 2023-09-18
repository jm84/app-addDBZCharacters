import { Component } from '@angular/core';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent {
  constructor(private registroService: RegistroService) {}
  registros = [
    { id: 1, nombre: 'Registro 1', informacion: 'Información del Registro 1' },
    { id: 2, nombre: 'Registro 2', informacion: 'Información del Registro 2' },
    // Agrega más registros según sea necesario
  ];

  registroSeleccionado: any = null;

  resaltarFila(registro: any) {
    this.registroSeleccionado = registro;
  }

  abrirPopup(registro: any) {
    this.registroService.registroSeleccionado = registro;
    this.registroService.mostrar();
    console.log('se esta en esta parte ', registro);
    // console.log(this.registroService.mostrar());
    // if (registro === this.registroSeleccionado) {
    //   this.registroService.registroSeleccionado;
    //   this.registroService.mostrar();
    //   // Lógica para abrir el popup con el nombre "detalle"
    //   // Puedes usar un componente de diálogo o mostrar el detalle en el mismo componente
    // }
  }
}
