import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  // @HostListener('mouseenter') onMouseOver(){
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color', 'yellow'
    // )
    // this.backgroundColor = 'yellow'
  // }


  // @HostListener('mouseleave') onMouseLeave(){
    // this._renderer.setStyle(
    //   this._elementRef.nativeElement,
    //   'background-color', 'white'
    // )
  //   this.backgroundColor = 'white'
  // }

  // // @HostBinding('style.backgroundColor') backColor: string
  // @HostBinding('style.backgroundColor') get setColor(){
  //   return this.backgroundColor
  // }
  constructor(
    // private backgroundColor: string
    // private _elementRef: ElementRef,
    // private _renderer: Renderer2
  ) { }

}
