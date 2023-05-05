import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericDialogTemplateComponent } from './generic-dialog-template.component';

describe('GenericDialogTemplateComponent', () => {
  let component: GenericDialogTemplateComponent;
  let fixture: ComponentFixture<GenericDialogTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericDialogTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericDialogTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
