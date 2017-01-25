import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { TableBaseComponent } from './table-base/table-base.component'
import { TableContainerComponent } from './table-container/table-container.component'
import { TablePatientMonitoringComponent } from './table-patient-monitoring/table-patient-monitoring.component'
import { NgxDatatableModule } from '@swimlane/ngx-datatable'

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    NgxDatatableModule,
    BrowserModule,
  ],
  declarations: [
      TableBaseComponent,
      TableContainerComponent,
      TablePatientMonitoringComponent,
  ],
  providers: [],
  exports: [
      TableContainerComponent,
  ]
})
export class TableModule {}
