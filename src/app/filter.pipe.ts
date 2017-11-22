import { Pipe, PipeTransform } from '@angular/core';
import {Food} from '../food';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input:Food): any {
    return input.filter(function(food){
    	return food.calories<500;
    })
  }

}
