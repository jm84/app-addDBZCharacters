import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  registroSeleccionado: any = null;
  mostrarPopup: boolean = false;
  constructor(private dialog: MatDialog) {}

  mostrar() {
    console.log(
      'estoy por aqui y el valor booleano esá en ',
      this.mostrarPopup
    );
    console.log('regristroseleccionado ', this.registroSeleccionado);
    this.mostrarPopup = true;
    this.dialog.open;
  }

  ocultar() {
    this.mostrarPopup = false;
  }
}
