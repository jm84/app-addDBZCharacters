import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css'],
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public characterw: Character = {
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    if (this.characterw.name.length === 0) return;

    this.onNewCharacter.emit(this.characterw);
    this.characterw = { name: '', power: 0 };
  }
}
