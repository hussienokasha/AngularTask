import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[MainColor]',
  standalone: true,
})
export class MainColorDirective {
  mainColor: string = '#8A74F9';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.setColor(this.mainColor);
  }

  private setColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
  }
}
