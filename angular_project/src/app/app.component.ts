import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl:'./app.component.scss'
  
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document){
  }
  scrollToBottom() {
    this.document.documentElement.scrollTop = this.document.documentElement.scrollHeight;
  }
    scrollToTop() {
    this.document.documentElement.scrollTop = 0;
  }
  title = 'angular_project';
}
