import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

 const APP_ROUTES: Route[] = [
    { path: "login", loadChildren:()=>import("./modules/login/login.module").then(m=>m.LoginModule) },
]
@NgModule({
    imports:[RouterModule.forRoot(APP_ROUTES)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
