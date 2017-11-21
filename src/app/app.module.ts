import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { ResultPaneComponent } from './result-pane/result-pane.component';
import { AddFoodComponent } from './add-food/add-food.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FooterComponent,
    ResultPaneComponent,
    AddFoodComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
