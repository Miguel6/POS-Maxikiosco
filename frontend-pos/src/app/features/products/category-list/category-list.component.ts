import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Category} from '../models/category';

@Component({
  selector: 'pos-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

  @Input() categories: Category[];
  @Input() showCategoryAll: boolean = false;

  @Output() onClickAll: EventEmitter<void> = new EventEmitter<void>();
  @Output() onClickCategory: EventEmitter<Category> = new EventEmitter<Category>();


  public activeCategory: number = 0;

  public clickOnCategory(id: number): void {
    this.activeCategory = id;
    this.onClickCategory.emit(this.categories.find(c => c.id == this.activeCategory))
  }

  public clickOnCategoryAll(): void {
    this.onClickAll.emit();
  }
}
