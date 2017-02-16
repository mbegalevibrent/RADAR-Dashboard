import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import * as pmAction from './table-patient-monitoring.actions';
import { TablePatientMonitoringData } from '../../models/table-patient-monitoring-data.model';
import { TablePatientMonitoringService } from '../../services/table-patient-monitoring.service';

@Injectable()
export class TablePatientMonitoringEffects {

  @Effect()
  update$: Observable<Action> = this.actions$
    .ofType(pmAction.Types.UPDATE)
    .switchMap(() => {
      return this.pmService.get()
        .map((data: TablePatientMonitoringData[]) => new pmAction.UpdateSuccess(data));
    });

  constructor(
    private actions$: Actions,
    private pmService: TablePatientMonitoringService
  ) { }
}
