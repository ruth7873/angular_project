import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from "./modules/login/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    declarations:[AppComponent],
    imports:[BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,AppRoutingModule],
    bootstrap:[AppComponent]
})
export class AppModule{
}

