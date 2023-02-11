import {Directive, ElementRef, HostListener} from '@angular/core';

export enum Direction {
  left = 'left',
  right = 'right'
}

@Directive({
  selector: '[posHorizontalScroll]',
  exportAs: 'posHorizontalScroll'
})
export class HorizontalScrollDirective {

  @HostListener('wheel', ['$event'])
  public onScroll(event: WheelEvent) {
    if (event.deltaY) {
      event.preventDefault();
      this.element.nativeElement.scrollLeft += event.deltaY;
    }
  }

  constructor(private element: ElementRef) {
  }

  public scrollTo(direction: Direction, displacement: number = 30): void {
    const signDirection = direction == Direction.left ? -1 : +1;
    this.element.nativeElement.scrollTo({left:(this.element.nativeElement.scrollLeft + (signDirection*displacement)), behavior: 'auto'});
  }
}
