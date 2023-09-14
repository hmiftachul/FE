import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UnlessDirective } from './unless.directive';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './user/table/table.component';
import { NavComponent } from './user/nav/nav.component';
import { FormComponent } from './user/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    TableComponent,
    NavComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
