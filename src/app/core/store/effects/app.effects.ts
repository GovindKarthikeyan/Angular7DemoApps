import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppActionTypes, LoadApps } from '../actions/app.actions';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(
      private actions$: Actions
    ) {}

  @Effect()
  appLoading: Observable<Action> = this.actions$
    .pipe(
      ofType<LoadApps>(AppActionTypes.LoadApps),
      tap(action => console.log(action))
    );

}
