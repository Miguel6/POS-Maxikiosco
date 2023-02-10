import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[posHorizontalScroll]'
})
export class HorizontalScrollDirective {

  @HostListener('wheel', ['$event'])
  public onScroll(event: WheelEvent) {
    if (event.deltaY) {
      event.preventDefault();
      this.element.nativeElement.scrollLeft += event.deltaY;
    }
  }

  constructor(private element: ElementRef) { }

}
