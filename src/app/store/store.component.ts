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

  storeItems=[];
  itemName:string;
  itemDesc:string;
  itemPrice:number;
  item={};
  showTable=false;
  addItems(){
    if(this.itemName!='' && this.itemDesc!='' && this.itemPrice!=null ){
      this.showTable=true;
      this.item={name:this.itemName, description:this.itemDesc, price:this.itemPrice};
      this.storeItems.push(this.item);
    }
  }

}
