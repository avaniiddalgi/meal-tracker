import { Component } from '@angular/core';
import {Food} from './food';//imports the nterface of the class food to be used for holding new input data.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = ' Meal Tracker ';
}
