import { Component } from '@angular/core';
// import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  model = {
    left: true,
    middle: false,
    right: false
  }


  columnDefs;
  rowData;

  constructor() {
      this.columnDefs = [
          {headerName: "Make", field: "make", width: 100},
          {headerName: "Model", field: "model", width: 100},
          {headerName: "Price", field: "price", width: 100}
      ];

      this.rowData = [
          {make: "Toyota", model: "Celica", price: 35000},
          {make: "Ford", model: "Mondeo", price: 32000},
          {make: "Porsche", model: "Boxter", price: 72000},
          {make: "Porsche", model: "Boxter", price: 72000},
          {make: "Porsche", model: "Boxter", price: 72000},
          {make: "Porsche", model: "Boxter", price: 72000},
          {make: "Porsche", model: "Boxter", price: 72000}
      ]
  }
  
}
 