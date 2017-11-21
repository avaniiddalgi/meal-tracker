import { Component} from '@angular/core';
import {Food} from '../food';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

masterFoodsList:Food[]=[]; // contains the master list foods in the array
showFood(newFoodFromChild:Food){
    this.masterFoodsList.push(newFoodFromChild);
  }
}
