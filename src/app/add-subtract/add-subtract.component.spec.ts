import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubtractComponent } from './add-subtract.component';

describe('AddSubtractComponent', () => {
  let component: AddSubtractComponent;
  let fixture: ComponentFixture<AddSubtractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSubtractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
