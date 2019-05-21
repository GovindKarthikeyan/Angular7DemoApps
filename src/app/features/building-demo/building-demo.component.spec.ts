import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDemoComponent } from './building-demo.component';

describe('BuildingDemoComponent', () => {
  let component: BuildingDemoComponent;
  let fixture: ComponentFixture<BuildingDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
