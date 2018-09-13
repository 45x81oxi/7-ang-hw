import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective implements OnChanges{
  @Input() appMyLoopOf: Array<any>;

  constructor(
    private  template: TemplateRef<any>,
    private container: ViewContainerRef
  ) { }

  ngOnChanges()  {
    for (let item of this.appMyLoopOf){
      this.container.createEmbeddedView(this.template, {
        $implicit: item,
        index: this.appMyLoopOf.indexOf(item)
      });
    }
  }
}
