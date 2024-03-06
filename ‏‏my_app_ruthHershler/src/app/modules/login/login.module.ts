import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
    declarations:[LoginComponent],
    imports:[FormsModule,ReactiveFormsModule,HttpClientModule,CommonModule,LoginRoutingModule],
    providers:[],
    exports:[LoginComponent]
})
export class LoginModule{}