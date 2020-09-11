import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Directives in Angular';
showDiv = false;
stuff : any[] = [];
nameOfEmployee = "xyz";

  constructor() {

    this.stuff =[
      {id:1, name: 'Mark'},
      {id:2, name: 'Jack'},
      {id:3, name: 'John'}
    ]

  }

}
