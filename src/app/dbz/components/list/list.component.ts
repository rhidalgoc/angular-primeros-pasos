import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character-interface';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList:Character[] = [];

  @Output()
  onDelete = new EventEmitter<string>;

  onDeleteCharacter(id?:string):void{
    //TODO: Emitir el ID del personaje
    if(!id) return;
    console.log({id});
    this.onDelete.emit(id);
  }
}