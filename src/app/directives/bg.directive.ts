import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBg]',
  host: {
    '(click)': 'onClick()'
  }
})
export class BgDirective {
  @Input() fontSize;
  @Input('appBg') bgColor;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) {}

  onClick() {
    this.renderer.setStyle(this.element.nativeElement, 'background', this.bgColor);
    this.renderer.setStyle(this.element.nativeElement, 'fontSize', this.fontSize);
  }
}
