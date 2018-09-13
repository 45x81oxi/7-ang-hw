import { Directive, Input, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyNgClass]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class MyNgClassDirective implements OnInit{
  @Input() padding:  string;
  @Input() borderradius: string;
  @Input() bgColor: string;
  @Input() fontolor: string;
  @Input() highlightbgColor: string;

  constructor(
    private element: ElementRef
  ) {}

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = this.bgColor;
    this.element.nativeElement.style.color = this.fontolor;
    this.element.nativeElement.style.borderradius = this.borderradius;
    this.element.nativeElement.style.padding = this.padding;
  }

  onMouseEnter(): void {
    this.highlight(this.highlightbgColor);
  }

  onMouseLeave(): void {
    this.highlight(this.bgColor);
  }

  private highlight(color: string): void {
    this.element.nativeElement.style.backgroundColor = color;
  }
}
