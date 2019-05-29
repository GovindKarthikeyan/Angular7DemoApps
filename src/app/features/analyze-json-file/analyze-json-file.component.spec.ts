import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeJsonFileComponent } from './analyze-json-file.component';

describe('AnalyzeJsonFileComponent', () => {
	let component: AnalyzeJsonFileComponent;
	let fixture: ComponentFixture<AnalyzeJsonFileComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AnalyzeJsonFileComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AnalyzeJsonFileComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
