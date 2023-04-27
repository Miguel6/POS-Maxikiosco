import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOrderSelectorComponent } from './product-order-selector.component';

describe('ProductOrderSelectorComponent', () => {
  let component: ProductOrderSelectorComponent;
  let fixture: ComponentFixture<ProductOrderSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductOrderSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOrderSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
