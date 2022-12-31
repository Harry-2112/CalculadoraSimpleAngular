import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgResultado]'
})
export class BgResultadoDirective implements OnInit{

  constructor(private elementRef: ElementRef, private rendered2:Renderer2) { }
  ngOnInit(){
    const element = this.elementRef.nativeElement
    this.rendered2.setStyle(element,'background','#DDFFFF')
  }

}
