///<reference path="../node_modules/@types/node/index.d.ts"/>
/**
 * Created by pakunert on 14.11.2016.
 */

import {Component, OnInit} from "@angular/core";
import {HeroService} from "./hero.service";
import {Hero} from "./hero";
@Component({
    moduleId:module.id,
    selector:'dashboard',
    templateUrl:'dashboard.component.html'
})
export class DashboardComponent implements OnInit{
    heroes:Hero[] = [];

    constructor(private heroService:HeroService){}

    ngOnInit(): void {

        this.heroService.getHeros().then(
            heroes => this.heroes=heroes.slice(1,5)
        )
    }

}
