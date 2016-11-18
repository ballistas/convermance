"use strict";
var heroes_component_1 = require("./heroes.component");
var dashboard_component_1 = require("./dashboard.component");
/**
 * Created by pakunert on 18.11.2016.
 */
exports.APP_ROUTES = [{
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    }, {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    }, {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    }];
//# sourceMappingURL=app.routes.js.map