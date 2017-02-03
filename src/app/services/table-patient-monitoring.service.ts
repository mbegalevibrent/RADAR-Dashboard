import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { TableData } from '../models/table-data.model';
import { ErrorService } from './error.service';

@Injectable()
export class TablePatientMonitoringService {

  constructor(private http: Http) { }

  get(): Observable<TableData[]> {
    // TODO: Change when API is ready
    return this.http.get(`${PARAMS.API_LOCAL}/mock-patient-monitoring.json`)
      .map(res => res.json().dataset || [])
      .map(this.parsePatientMonitoringData)
      .catch(ErrorService.handleError);
  }

  parsePatientMonitoringData(dataset) {
    return dataset
      .map(data => {
        return {
          data: data
        };
      });
  }
}
