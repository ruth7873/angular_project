import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
    declarations:[AppComponent],
    imports:[BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule,AppRoutingModule,MatFormFieldModule,MatIconModule],
    bootstrap:[AppComponent],
    providers: [
      provideAnimationsAsync()
    ]
})
export class AppModule{
}