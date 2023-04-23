import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSelectorComponent } from './order-selector.component';

describe('OrderSelectorComponent', () => {
  let component: OrderSelectorComponent;
  let fixture: ComponentFixture<OrderSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
