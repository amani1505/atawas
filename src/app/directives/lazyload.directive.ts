import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appLazyload]',
  standalone: true,
})
export class LazyloadDirective implements AfterViewInit {
  constructor(private _el: ElementRef, private _renderer: Renderer2) {}

  ngAfterViewInit() {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this._renderer.addClass(this._el.nativeElement, 'loaded');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(this._el.nativeElement);
  }
}
