import { Component, Input, Output, EventEmitter} from '@angular/core';
import {Food} from '../food';

 
@Component({
  selector: 'app-result-pane',
  templateUrl: './result-pane.component.html',
  styleUrls: ['./result-pane.component.css']
})
export class ResultPaneComponent{
	@Input() childFoodlist:Food[];
  //@Output();

  /*masterFoodlist:Food[]=[];
  
  selectedFood=null;

  addFood(foodFromChild:Food){
    this.masterFoodlist.push(foodFromChild);
  }

  showDetails(food:Food){
    this.selectedFood=food;
  }*/

}
