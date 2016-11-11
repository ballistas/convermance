/**
 * Created by pakunert on 11.11.2016.
 */

import {Injectable} from "@angular/core";
import {Hero} from "./hero";

const HEROES:Hero[]=[
    {id:1,name:'Windstorm'}
];

@Injectable()
export class HeroService{
    getHeros():Promise<Hero[]>{

        return Promise.resolve(
            HEROES
        );
    }
}
