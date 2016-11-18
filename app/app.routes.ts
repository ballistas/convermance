import {Route} from "@angular/router";
import {HeroesComponent} from "./heroes.component";
import {DashboardComponent} from "./dashboard.component";
/**
 * Created by pakunert on 18.11.2016.
 */

export const APP_ROUTES:Route[]=[{
    path:'heroes',
    component:HeroesComponent
},{
    path:'dashboard',
    component:DashboardComponent
},{
    path:'',
    redirectTo:'/dashboard',
    pathMatch:'full'
}];

