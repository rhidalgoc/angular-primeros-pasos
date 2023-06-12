import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character-interface';
import { v4 as uuid } from 'uuid';

console.log(uuid());

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters:Character[] = [
    {
      id:uuid(),
      name: 'Krillin',
      power: 500
    },
    {
      id:uuid(),
      name: 'Goku',
      power: 9999
    },
    {
      id:uuid(),
      name: 'Piccolo',
      power: 455
    }
  ];

addCharacter (character:Character):void{

  //debugger;
  /*const newCharacter:Character = {
    id:uuid(),
    name: character.name,
    power: character.power
  };*/
  const newCharacter: Character = { id:uuid(), ...character};
  this.characters.push(newCharacter);
  console.log(newCharacter);
}

/*onDelete(index:number):void{
  this.characters.splice(index, 1);
}*/

deleteCharacterById(id:string):void{
  this.characters = this.characters.filter(character => character.id !== id);
}

}
