import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfElement]'
})
export class IfElementDirective {

  constructor(public templateRef:TemplateRef<any>,public viewContainerRef:ViewContainerRef) { }

  @Input()
  set appIfElement(shouldAdd:boolean){
    if(shouldAdd){
      console.log("TRUE")
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
    else {
      console.log("FALSE")
      this.viewContainerRef.clear();
    }
  }
}
