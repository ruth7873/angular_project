import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { UserRoutingModule } from "./user-routing.module";
import { RegisterComponent } from "./register/register.component";
import { LogoutComponent } from "./logout/logout.component";
import { UserService } from "./user.service";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    declarations:[LoginComponent,RegisterComponent,LogoutComponent],
    imports:[FormsModule,ReactiveFormsModule,HttpClientModule,CommonModule,UserRoutingModule,MatFormFieldModule,MatIconModule,MatInputModule],
    providers:[UserService],
    exports:[LoginComponent]
})
export class UserModule{}