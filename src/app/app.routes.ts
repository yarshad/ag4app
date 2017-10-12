import { Routes } from '@angular/router';

import { CarComponent } from './car/car.component';
import { AboutComponent } from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RouterModule } from '@angular/router'

const APP_ROUTES : Routes = [
    
    {path : 'about', component: AboutComponent },
    {path : 'car', component: CarComponent },
    {path : 'home', component: HomeComponent },
    { path: '', redirectTo: 'home',pathMatch: 'full'}
    
    ]
        
    export const APP_ROUTES_PROVIDER = [
        RouterModule.forRoot(APP_ROUTES)
    ]