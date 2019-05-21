import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckValueChangesComponent } from './check-value-changes.component';

describe('CheckValueChangesComponent', () => {
  let component: CheckValueChangesComponent;
  let fixture: ComponentFixture<CheckValueChangesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckValueChangesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckValueChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
