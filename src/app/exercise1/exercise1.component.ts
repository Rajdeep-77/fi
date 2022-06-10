import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  //__________________Exercise-1_____________variables_________________________________

  // exercise 1.1 variables
  inputEx1:string='';
  inputEx1Length:number;
  buttonClicked=false;
  

  // exercise 1.2 variables
  usName:string;
  usAge:number;
  userDetails:object = {};
  buttonState=false;
  

  // exercise 1.3 variables
  userNameOfEx3:string;
  userAge:number;
  userArr=[];
  userData:object = {};
  displayArray=false;
  

  // exercise 1.4 variables
  numOfEx4:number;
  resultOfEx4:number;
  displaynum=false;
  

  //___________________Exercise-1__________functions____________________________________

  // exercise 1.1 This function returns the length of the input.
  showLength(){
    this.buttonClicked=true;
    this.inputEx1Length=(this.inputEx1).length;
  }

  // exercise 1.2 This function returns the object of input fields name & age.
  showObj(){
    this.buttonState= true;
    this.userDetails = { name:this.usName, age:this.usAge };
  }

  // exercise 1.3 This function returns the array of objects of given input fields.
  showArr(){
    this.displayArray=true;
    this.userData = { name:this.userNameOfEx3, age:this.userAge };
    this.userArr.push(this.userData);
  }

  // exercise 1.4 This function will display the number 
  showNum(){
    this.resultOfEx4=this.numOfEx4;
    this.displaynum=true;
  }

}
