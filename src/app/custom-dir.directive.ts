import { Directive, ElementRef, ViewChild } from '@angular/core';


@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {

  // @ViewChild('span',{static:false, read: ElementRef}) elRef: any;
  el:ElementRef;

  constructor(el:ElementRef) {
   this.el=el;
  }

  // exercise 1.5 This function highlights all the span tags inside p tag.
  ngAfterViewInit(){
    var hostElem = 'span';
    console.log(hostElem);
    for(let i=0; i<this.el.nativeElement.children.length; i++){
     
      if(this.el.nativeElement.children[i].localName==hostElem){

        (this.el.nativeElement.children[i]).style.backgroundColor='rosybrown';
      }
    }

  }
}
