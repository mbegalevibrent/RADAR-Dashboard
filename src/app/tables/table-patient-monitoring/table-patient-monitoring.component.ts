import { Component, ChangeDetectionStrategy, Input, OnInit, ViewEncapsulation, ViewChild} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TablePatientMonitoringData } from '../../models/table-patient-monitoring-data.model';
import * as fromRoot from '../../store';
import * as pmAction from '../../store/table-patient-monitoring/table-patient-monitoring.actions';

@Component({
  selector: 'app-table-patient-monitoring',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="header">
    <div class="title">{{title}}</div>
  </div>
  <div class="container">
    <ngx-datatable
        #PatientMonitoringTable
        class='material expandable'
        [columnMode]="'standard'"
        [headerHeight]="25"
        [footerHeight]="25"
        [rowHeight]="24"
        [scrollbarV]="30"
        [rows]='rowsWorkaround'>

         <ngx-datatable-column
          [resizeable]="false"
          [sortable]="false"
          [draggable]="false"

          [flexGrow]="0">

          <template let-row="row" ngx-datatable-cell-template>
            <a
              href="#"
              [class.icon-right]="!row.$$expanded"
              [class.icon-down]="row.$$expanded"
              title="Expand/Collapse Row"
              (click)="toggleExpandRow(row)"><span class="md-select-arrow"></span>
            </a>
          </template>

        </ngx-datatable-column>

        <ngx-datatable-column name="Patient ID"  [flexGrow]="1">
          <template let-row="row" ngx-datatable-cell-template>
            {{row.patientId}}
          </template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Device ID"  [flexGrow]="1">
          <template let-row="row"  ngx-datatable-cell-template>
            {{row.deviceId}}
          </template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Device Type" [flexGrow]="1">
          <template let-row="row" ngx-datatable-cell-template>
            {{row.deviceName}}
          </template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Status"  [flexGrow]="0">
          <template let-row="row" ngx-datatable-cell-template>
            <div class="status"
                [class.success]="isConnected(row.status)"
                [class.error]="!isConnected(row.status)"></div>
          </template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Transmit Rate"  [flexGrow]="3">
          <template let-row="row"  ngx-datatable-cell-template>
            {{row.dataRate}}
          </template>
        </ngx-datatable-column>

        <!-- Row Detail Template -->
        <ngx-datatable-row-detail [rowHeight]="60" #detailRow>
          <template let-row="row" ngx-datatable-row-detail-template>
            <div style="padding-left:35px;">
              <div>Sensor Details:</div>
              <span class="sensorInfo" *ngFor="let sensor of row.sensors" (click)="selectSensor(sensor.name)">
                <div>
                  <div class="status sensorInfoSingle"
                  [class.success]="isConnected(sensor.status)"
                  [class.error]="!isConnected(sensor.status)"></div>
                  {{sensor.name}}
                </div>
              </span>
            </div>
          </template>
        </ngx-datatable-row-detail>
        <!-- Column Templates -->
      </ngx-datatable>
  </div>
  `,
  styleUrls: ['./table-patient-monitoring.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TablePatientMonitoringComponent implements OnInit {

  @ViewChild('PatientMonitoringTable') table: any;
  expanded: any = {};
  timeout: any;
  rowsWorkaround: TablePatientMonitoringData[];
  rows$: Observable<TablePatientMonitoringData[]>;

  @Input() title: string;

  constructor(private store: Store<fromRoot.State>) {
    // currently not a true Observable, due to StoreFreeze and ngx-datatable internal data manupulation
    this.store.let(fromRoot.getTablePmData)
      .filter(rows => !!rows)
      .map(data => data || [])
      .subscribe(rowsWorkaround => {
        this.rowsWorkaround = JSON.parse(JSON.stringify(<TablePatientMonitoringData[]>rowsWorkaround))
        this.submitInitalSelectedParameters(this.rowsWorkaround);
      });
  }

  submitInitalSelectedParameters(parameters){
    if(parameters.length > 0){
      this.store.dispatch(new pmAction.SelectedPatient({
        patientId: parameters[0].patientId,
        deviceId: parameters[0].deviceId,
      }));
      this.store.dispatch(new pmAction.SelectedSensor({
        sensor: parameters[0].sensors[0].name,
      }));
    }
  }

  ngOnInit() {
    this.store.dispatch(new pmAction.Update());
  }

 toggleExpandRow(row) {
   this.table.rowDetail.toggleExpandRow(row);
   this.selectPatient({
     patientId: row.patientId,
     deviceId: row.deviceId
   });
 }

 selectPatient(patientDetails){
   this.store.dispatch(new pmAction.SelectedPatient({
     patientId: patientDetails.patientId,
     deviceId: patientDetails.deviceId
   }));
 }

 selectSensor(sensorName){
   this.store.dispatch(new pmAction.SelectedSensor({
     sensor: sensorName
   }));
 }

 isConnected(status){
   if(status === "CONNECTED"){
     return true;
   } else {
     return false;
   }
 }

}
