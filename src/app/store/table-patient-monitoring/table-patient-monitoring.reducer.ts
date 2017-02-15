import '@ngrx/core/add/operator/select';
import { Observable } from 'rxjs/Observable';
import { TablePatientMonitoringData } from '../../models/table-patient-monitoring-data.model';
import * as pmAction from './table-patient-monitoring.actions';

export interface State {
  loading: boolean;
  data: TablePatientMonitoringData[];
  selectedPatientId: string;
  selectedDeviceId: string;
  selectedSensor: string;
}

const initialState: State = {
  loading: false,
  data: [],
  selectedPatientId: null,
  selectedDeviceId: null,
  selectedSensor: null
};

export function reducer(state = initialState, action: pmAction.Actions): State {
  switch (action.type) {

    case pmAction.Types.UPDATE: {
      return Object.assign({}, state, {
        loading: true
      });
    }

    case pmAction.Types.UPDATE_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        data: action.payload
      });
    }

    case pmAction.Types.SELECTED_PATIENT: {
      return Object.assign({}, state, {
        selectedPatientId: action.payload.patientId,
        selectedDeviceId: action.payload.deviceId
      });
    }

    case pmAction.Types.SELECTED_SENSOR: {
      return Object.assign({}, state, {
        selectedSensor: action.payload.sensor
      });
    }

    default:
      return state;
  }
}

export function getLoading(state$: Observable<State>) {
  return state$.select(s => s.loading);
}

export function getData(state$: Observable<State>) {
  return state$.select(s => s.data);
}

export function getSelectedParameters(state$: Observable<State>){
  return state$.select(s => s.selectedParammeters)
}
