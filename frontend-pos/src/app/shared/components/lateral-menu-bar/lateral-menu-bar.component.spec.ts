import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralMenuBarComponent } from './lateral-menu-bar.component';

describe('LateralMenuBarComponent', () => {
  let component: LateralMenuBarComponent;
  let fixture: ComponentFixture<LateralMenuBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralMenuBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LateralMenuBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
