import { Component, OnInit } from '@angular/core';
// import {GridOptions} from "ag-grid/main";
import {GridOptions} from 'ag-grid'


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

 

// gridOptions : GridOptions = <GridOptions>{};

gridOptions: GridOptions;

columnDefs =  [
  {headerName: "Make", field: "make", width: 100},
  {headerName: "Model", field: "model", width: 100},
  {headerName: "Price", field: "price", width: 100}
];
  
data  = [
  {make: "Toyota", model: "Celica", price: 35000},
  {make: "Ford", model: "Mondeo", price: 32000},
  {make: "Porsche", model: "Boxter", price: 72000},
  {make: "Porsche", model: "Boxter", price: 72000},
  {make: "Porsche", model: "Boxter", price: 72000},
  {make: "Porsche", model: "Boxter", price: 72000},
  {make: "Porsche", model: "Boxter", price: 72000}
]

  loadData(){
 
    console.log("Loading data...")
    // this.gridOptions.api.setColumnDefs(this.columnDefs)
    
     this.gridOptions.api.setRowData(this.data)
  }

  constructor() {  
      
  }
  ngOnInit() {
    this.gridOptions = { 
      rowHeight : 18,
    }
        
    this.gridOptions.columnDefs = this.columnDefs

  }

 
}
