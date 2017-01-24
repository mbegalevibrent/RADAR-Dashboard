import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { TableBaseComponent } from './table-base/table-base.component'
import { TableContainerComponent } from './table-container/table-container.component'
import { TablePatientMonitoringComponent } from './table-patient-monitoring/table-patient-monitoring.component'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
      TableBaseComponent,
      TableContainerComponent,
      TablePatientMonitoringComponent
  ],
  providers: [],
  exports: [
      TableContainerComponent
  ]
})
export class TableModule {}
