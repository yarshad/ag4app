import { Component, OnInit,ViewChild } from '@angular/core';
import { CarComponent } from '../car/car.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   @ViewChild(CarComponent) carComponent;


   clicked(){
    this.carComponent.loadData();
    }


 ngAfterViewInit() {
  console.log('only after THIS EVENT "child" is usable!!');
 
  // this.carComponent.hide();
}

  constructor() { }

  ngOnInit() {
  }

}
