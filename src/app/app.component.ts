import { Component } from '@angular/core';
import {Food} from './food';//imports the nterface of the class food to be used for holding new input data.
import {FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Meal Tracker ';


  public masterFoodsList:Food[]=[
  	//initial elements in the food meals array
  	new Food("ugali","lunch", 343),
  	new Food("Cereals","Breakfast", 280),
  	new Food("Chapatis","Supper",288),
  	new Food("Pizza","snack",212)
  ];

	// adds food meal items to the list throught the array
	showFood(newFoodFromChild:Food){
    this.masterFoodsList.push(newFoodFromChild);
  }
  //editting the a selected meal in the list
  selectedFood:Food=null;//no food selected

  showFoodDetailToEdit(food:Food){
    this.selectedFood=food;
  }
  finishedEditing(){
     this.selectedFood=null;
   }






  }
