import {Component, EventEmitter, Input, OnDestroy, Output, ViewChild} from '@angular/core';
import {Category} from '../../../features/products/models/category';
import {Direction, HorizontalScrollDirective} from '../../directives/horizontal-scroll.directive';

@Component({
  selector: 'pos-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnDestroy {

  @Input() categories: Category[];
  @Input() showCategoryAll: boolean = false;

  @Output() onClickAll: EventEmitter<void> = new EventEmitter<void>();
  @Output() onClickCategory: EventEmitter<Category> = new EventEmitter<Category>();

  @ViewChild(HorizontalScrollDirective) horizontalScrollDirective: HorizontalScrollDirective;

  public direction = Direction;
  public activeCategory: number = null;

  private scrollIntervalId: NodeJS.Timer = null;

  constructor() {
  }

  ngOnDestroy(): void {
    this.stopScroll()
  }

  public clickOnCategory(id: number): void {
    this.setSelection(id);
    this.onClickCategory.emit(this.categories.find(c => c.id == this.activeCategory))
  }

  public clickOnCategoryAll(): void {
    this.onClickAll.emit();
    this.clearSelection();
  }

  public scrollTo(direction: Direction): void {
    if (!this.scrollIntervalId) {
      this.scrollIntervalId = setInterval(() => {
        this.horizontalScrollDirective.scrollTo(direction);
      }, 50);
    }
  }

  public stopScroll(): void {
    if (this.scrollIntervalId) {
      clearInterval(this.scrollIntervalId);
      this.scrollIntervalId = null;
    }
  }

  private clearSelection(): void {
    this.setSelection(null);
  }

  private setSelection(id: number): void {
    this.activeCategory = id;
  }
}
