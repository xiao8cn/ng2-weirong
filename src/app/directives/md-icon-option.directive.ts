import {Directive, ElementRef, Input,OnInit} from '@angular/core';

@Directive({
  selector: '[appMdIconOption]'
})

export class MdIconOptionDirective implements OnInit{

  @Input() iconColor: string = "black";

  @Input() fontSize: string = "24px";

  constructor(private el:ElementRef) {
  }

  ngOnInit(){
    console.table(this.iconColor,this.fontSize);
    this.el.nativeElement.style.fontSize = this.fontSize;
    this.el.nativeElement.style.color = this.iconColor;
  }

}
