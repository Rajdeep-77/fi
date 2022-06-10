import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  styles: ['th{ margin-left: 25px; }']
})
export class StoreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // exercise 2   variables
  storeItems=[];
  itemName:string;
  itemDesc:string;
  itemPrice:number;
  item={};
  inputMissing=false;
  showTable=false;
  
  // This function gets all input data and shows t in the table if checked condition are satisfied 
  addItems(){
    if(this.itemName!='' && this.itemDesc!='' && this.itemPrice!=null ){
      this.showTable=true;
      this.inputMissing=false;
      this.item={name:this.itemName, description:this.itemDesc, price:this.itemPrice};
      this.storeItems.push(this.item);
    }
    if(this.itemName=='' || this.itemDesc=='' || this.itemPrice==null ){
      this.inputMissing=true;
    }
  }

}
