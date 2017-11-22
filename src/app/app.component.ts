import { Component } from '@angular/core';
import {Food} from './food';//imports the nterface of the class food to be used for holding new input data.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = ' Meal Tracker ';


  public masterFoodsList:Food[]=[
  	new Food("ugali","lunch", 343),
  	new Food("Cereals", "Breakfast", 673),
  	new Food("Chapati","Supper",188),
  	new Food("Pizza","snack",210)
  ]; // contains the master list foods in the array
    showDetails(food:Food){
    this.selectedFood=food;
	}

	showFood(newFoodFromChild:Food){
    this.masterFoodsList.push(newFoodFromChild);
  	}

  selectedFood=null;



  }

