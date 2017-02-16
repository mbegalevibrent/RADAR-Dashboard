/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TablePatientMonitoringService } from './table-patient-monitoring.service';

// need to implement this

describe('TablePatientMonitoringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TablePatientMonitoringService]
    });
  });

  it('should ...', inject([TablePatientMonitoringService], (service: TablePatientMonitoringService) => {
    expect(service).toBeTruthy();
  }));
});
