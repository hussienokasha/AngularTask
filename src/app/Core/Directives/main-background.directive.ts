import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[MainBackground]',
  standalone: true
})
export class MainBackgroundDirective {
  mainColor: string = '#8A74F9';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setColor(this.mainColor);
  }

  private setColor(color: string) {
    this.renderer.setAttribute(
      this.el.nativeElement,
      'style',
      `background-color: ${color} !important`
    );
  }

}
