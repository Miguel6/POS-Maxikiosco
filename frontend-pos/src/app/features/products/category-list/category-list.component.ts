import {Component, Input} from '@angular/core';
import {Category} from '../models/category';

@Component({
  selector: 'pos-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {

  @Input() categories: Category[];
  public activeCategory: number = 0;

  public clickOnCategory(id: number): void {
    this.activeCategory = id;
  }
}
