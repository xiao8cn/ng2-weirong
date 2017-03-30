import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[myHighlight]'
})
export class HighLightDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  @Input('myHighlight') highlightColor: string;

  @HostListener
  ('touchstart') onTouchStart() {
    console.log('start');
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener
  ('touchend') onTouchend() {
    console.log('end');
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
