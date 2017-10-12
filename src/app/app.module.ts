import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AgGridModule }  from "ag-grid-angular";
import { CarComponent } from './car/car.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
 import { APP_ROUTES_PROVIDER } from './app.routes';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    APP_ROUTES_PROVIDER,
    AgGridModule.withComponents([ ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
