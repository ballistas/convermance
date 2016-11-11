/**
 * Created by pakunert on 11.11.2016.
 */

import {Component, OnInit, Output} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
@Component({
    selector:'heroes',
    template:`
       <ul class="heroes">
        <li *ngFor="let hero of heroes"
          [class.selected]="hero === selectedHero"
          (click)="onSelect(hero)">
          <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
      </ul>
    `
})
export class HeroesComponent implements OnInit{

    heroes:Hero[];
    @Output()
    selectedHero:Hero;

    constructor(private heroService:HeroService){

    }

    onSelect(hero:Hero):void{

        this.selectedHero = hero;
    }

    public getHeroes():void{

        this.heroService.getHeros().then(
            heroes => this.heroes=heroes
        );
    }

    ngOnInit(): void {

        this.getHeroes();

    }
}
