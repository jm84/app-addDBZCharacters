import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500,
    },
  ];

  onDeleteCharacter(index: number) {
    this.characters.splice(index, 1);
  }

  onNewCharacterMainPage(character: Character): void {
    console.log('MainPage ', character);
    const newCharacter: Character = { id: uuid(), ...character };
    console.log(newCharacter);
    this.characters.push(newCharacter);
  }
}
