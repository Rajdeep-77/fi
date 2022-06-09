import { Directive, ElementRef, ViewChild } from '@angular/core';


@Directive({
  selector: '[appCustomDir]'
})
export class CustomDirDirective {

  // @ViewChild('span',{static:false, read: ElementRef}) elRef: any;
  el:ElementRef;

  constructor(el:ElementRef) {
   this.el=el;
    // console.log(el.nativeElement.children)
    // if(el.nativeElement.children==='span'){
    //  el.nativeElement.children.style.backgroundColor='rosybrown';
    // }
  }
  ngAfterViewInit(){
    // const hostElem = this.el.nativeElement;
    var hostElem = 'span';
    console.log(hostElem);
    for(let i=0; i<this.el.nativeElement.children.length; i++){
      //console.log('yes');
      // console.log(this.el.nativeElement.children[i]);
      if(this.el.nativeElement.children[i].localName==hostElem){

        (this.el.nativeElement.children[i]).style.backgroundColor='rosybrown';
      }
    }

  }
}
