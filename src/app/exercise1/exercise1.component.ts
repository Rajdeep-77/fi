import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  //__________________________________Exercise-1______________________________________________

  // exercise 1.1
  inputEx1:string='';
  inputEx1Length:number;
  buttonClicked=false;
  showLength(){
    this.buttonClicked=true;
    this.inputEx1Length=(this.inputEx1).length;
  }

  // exercise 1.2
  usName:string;
  usAge:number;
  userDetails:object = {};
  buttonState=false;
  showObj(){
    this.buttonState= !this.buttonState;
    this.userDetails = { name:this.usName, age:this.usAge };
  }

  // exercise 1.3
  userNameOfEx3:string;
  userAge:number;
  userArr=[];
  userData:object = {};
  displayArray=false;
  showArr(){
    this.displayArray=true;
    this.userData = { name:this.userNameOfEx3, age:this.userAge };
    this.userArr.push(this.userData);
  }

  // exercise 1.4
  numOfEx4:number;
  displaynum=false;
  showNum(){
    this.displaynum=!this.displaynum;
  }

  // exercise 1.5
  // spanInsideP=true;

}
