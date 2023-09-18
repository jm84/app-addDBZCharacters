import { Component } from '@angular/core';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
})
export class PopupComponent {
  constructor(public registroService: RegistroService) {}
  get registroSeleccionado() {
    console.log(
      'registro desde metodo get ',
      this.registroService.registroSeleccionado
    );
    console.log(
      'valor del mostrarpopup despues del cambio ',
      this.registroService.mostrarPopup
    );
    return this.registroService.registroSeleccionado;
  }
}
