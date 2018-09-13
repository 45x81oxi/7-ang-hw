import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyNgStyle]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class MyNgStyleDirective {
  @Input('appMyNgStyle') highlightColor: string;

  constructor(
    private element: ElementRef
  ) {}

  onMouseEnter(): void {
    this.highlight(this.highlightColor || 'lime');
  }

  onMouseLeave(): void {
    this.highlight(null);
  }

  private highlight(color: string): void {
    this.element.nativeElement.style.color = color;
  }

}
