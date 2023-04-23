import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelOrderSelectorComponent } from './panel-order-selector.component';

describe('OrderSelectorComponent', () => {
  let component: PanelOrderSelectorComponent;
  let fixture: ComponentFixture<PanelOrderSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelOrderSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PanelOrderSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
