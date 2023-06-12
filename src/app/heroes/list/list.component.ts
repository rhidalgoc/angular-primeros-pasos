import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

public heroesName: string[]= ['Spiderman','Ironman','Hulk'];
public deleteHero?:string = '';


RemoverHeroes():void{
  this.deleteHero = this.heroesName.pop();
  console.log (this.deleteHero);
}
}
