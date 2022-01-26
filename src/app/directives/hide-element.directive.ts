import { Directive, ElementRef, Renderer2 } from '@angular/core';
//attribute directive example
@Directive({
  selector: '[appHideElement]'
})
export class HideElementDirective {

  constructor(el: ElementRef, renderer2: Renderer2) {
    renderer2.setStyle(el.nativeElement, 'visibility', 'hidden')
  }

}
