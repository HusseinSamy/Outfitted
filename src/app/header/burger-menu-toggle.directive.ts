import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appBurgerMenuToggle]'
})
export class BurgerMenuToggleDirective {

  @Input() set appBurgerMenuToggle (condition: boolean){
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else{
      this.viewContainer.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

}
