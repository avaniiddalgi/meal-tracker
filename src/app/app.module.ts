import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { ResultPaneComponent } from './result-pane/result-pane.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FooterComponent,
    ResultPaneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
