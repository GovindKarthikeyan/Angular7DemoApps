import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFromComponent } from './reactive-from.component';

describe('ReactiveFromComponent', () => {
  let component: ReactiveFromComponent;
  let fixture: ComponentFixture<ReactiveFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
