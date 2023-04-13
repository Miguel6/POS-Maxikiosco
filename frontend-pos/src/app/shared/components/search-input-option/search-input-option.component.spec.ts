import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputOptionComponent } from './search-input-option.component';

describe('SearchInputOptionComponent', () => {
  let component: SearchInputOptionComponent;
  let fixture: ComponentFixture<SearchInputOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInputOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInputOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
