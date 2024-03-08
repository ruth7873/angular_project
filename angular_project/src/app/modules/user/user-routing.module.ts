import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

 const APP_ROUTES: Route[] = [
    { path: "login", component:LoginComponent },
    { path: "register", component:RegisterComponent },
    { path: "logout", component:LogoutComponent },


]
@NgModule({
    imports:[RouterModule.forChild(APP_ROUTES)],
    exports:[RouterModule]
})
export class UserRoutingModule{}
