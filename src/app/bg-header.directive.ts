import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgHeader]'
})
export class BgHeaderDirective implements OnInit {

  constructor(private elementRef: ElementRef, private rendered2:Renderer2) { }
  ngOnInit(){
    const element = this.elementRef.nativeElement
    this.rendered2.setStyle(element,'background','#003A60')
  }

}
