import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ExchangeService } from 'src/app/core/services/exchange.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { tap, switchMap, combineLatest } from 'rxjs/operators';

@Component({
	selector: 'app-building-demo',
	templateUrl: './building-demo.component.html',
	styleUrls: ['./building-demo.component.scss']
})
export class BuildingDemoComponent implements OnInit {

	private buildingId: number;
	private $building: Observable<any>;
	private $buildingUnits: Observable<any>;
	reloadClick$ = new BehaviorSubject<any>('initValue');

	constructor(
		private buildingService: ExchangeService,
		private route: ActivatedRoute) { }

	ngOnInit() {
		this.$building = this.route.paramMap.pipe(
			tap((params: ParamMap) => this.buildingId = Number(params.get('id'))),
			switchMap((params: ParamMap) => this.buildingService.getBugetBuilding(this.buildingId))
		);

		this.$buildingUnits = this.route.paramMap.pipe(combineLatest(this.reloadClick$)).pipe(
			switchMap(([params, _]) => this.buildingService.getBuildingUnits(10))
		);

	}

	reloadBuildingUnits() {
		this.reloadClick$.next('reloadClick');
	}

}
