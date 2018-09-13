import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})

export class MyIfDirective implements OnChanges {

  constructor(
    private  templataRef: TemplateRef<any>,
    private  viewContainer: ViewContainerRef
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
  }


  @Input() set appMyIf(condition){
    if(condition){
      this.viewContainer.createEmbeddedView(this.templataRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
