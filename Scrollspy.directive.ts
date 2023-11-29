// scrollspy.directive.ts
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollSpy]'
})
export class ScrollSpyDirective {
  @Input() spyId: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const targetElement = document.getElementById(this.spyId);

    if (targetElement) {
      const targetPosition = targetElement.offsetTop;
      const targetHeight = targetElement.offsetHeight;

      if (scrollPosition >= targetPosition && scrollPosition < targetPosition + targetHeight) {
        this.renderer.addClass(this.el.nativeElement, 'active');
      } else {
        this.renderer.removeClass(this.el.nativeElement, 'active');
      }
    }
  }
}
