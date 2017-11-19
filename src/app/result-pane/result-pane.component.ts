import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-pane',
  templateUrl: './result-pane.component.html',
  styleUrls: ['./result-pane.component.css']
})
export class ResultPaneComponent implements OnInit {
	foodName: string =[];
	calories:number;
	details: string;

  constructor() { 

  }

  ngOnInit() {
  	// assigns custom values for the properties
  	this.foodName =['fish','sukuma'];
  	this.calories = 120;
  	this.details = 'it is tasty lots of proteins';
  }
  onClick(){
  	this.foodName.push('sima');
  	this.calories = 500;
  }
}
