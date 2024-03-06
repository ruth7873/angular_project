import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';

 const APP_ROUTES: Route[] = [
    { path: "", component:LoginComponent },
]
@NgModule({
    imports:[RouterModule.forChild(APP_ROUTES)],
    exports:[RouterModule]
})
export class LoginRoutingModule{}
