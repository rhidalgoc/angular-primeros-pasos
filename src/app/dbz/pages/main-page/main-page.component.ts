import { Component } from '@angular/core';
import { Character } from '../../interfaces/character-interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private serviceDbz:DbzService){}

  get characters(): Character[] {
    return [...this.serviceDbz.characters]
  }

  onDeleteCharacter(id:string):void {
    this.serviceDbz.deleteCharacterById(id);
  }

  onNewCharacter(datos:Character):void{
    this.serviceDbz.addCharacter(datos);
  }
}
