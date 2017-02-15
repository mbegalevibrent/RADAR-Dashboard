import { Action } from '@ngrx/store';
import { type } from '../../shared/util';
import { TablePatientMonitoringData } from '../../models/table-patient-monitoring-data.model';

export class Types {
  static readonly UPDATE         = type('[TablePatientMonitoring] Update');
  static readonly UPDATE_SUCCESS = type('[TablePatientMonitoring] Update Success');
}

export class Update implements Action {
  readonly type = Types.UPDATE;

  constructor() {}
}

export class UpdateSuccess implements Action {
  readonly type = Types.UPDATE_SUCCESS;

  constructor(public payload: TablePatientMonitoringData[]) {console.log('pm update')}
}

export type Actions
  = Update
  | UpdateSuccess;
