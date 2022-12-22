import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemMenuBarComponent } from './item-menu-bar.component';

describe('ItemMenuBarComponent', () => {
  let component: ItemMenuBarComponent;
  let fixture: ComponentFixture<ItemMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemMenuBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
