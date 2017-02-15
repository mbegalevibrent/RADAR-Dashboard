import { Action } from '@ngrx/store';
import { type } from '../../shared/util';
import { TablePatientMonitoringData } from '../../models/table-patient-monitoring-data.model';

export class Types {
  static readonly UPDATE         = type('[TablePatientMonitoring] Update');
  static readonly UPDATE_SUCCESS = type('[TablePatientMonitoring] Update Success');
  static readonly SELECTED_PATIENT = type('[TablePatientMonitoring] Selected Patient');
  static readonly SELECTED_SENSOR = type('[TablePatientMonitoring] Selected Sensor');
}

export class Update implements Action {
  readonly type = Types.UPDATE;

  constructor() {}
}

export class UpdateSuccess implements Action {
  readonly type = Types.UPDATE_SUCCESS;

  constructor(public payload: TablePatientMonitoringData[]) {}
}

export class SelectedPatient implements Action {
  readonly type = Types.SELECTED_PATIENT;

  constructor(public payload){console.log(payload)}
}

export class SelectedSensor implements Action {
  readonly type = Types.SELECTED_SENSOR;

  constructor(public payload){console.log(payload)}
}

export type Actions
  = Update
  | UpdateSuccess
  | SelectedPatient
  | SelectedSensor;
