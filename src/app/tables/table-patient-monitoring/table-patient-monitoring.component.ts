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
    <!--ngx-datatable
      [rows]="rows$ | async"
      [columns]="columns"
      [headerHeight]="50"
      [rowHeight]="25"
      [scrollbarV]="true">
    </ngx-datatable -->
    <ngx-datatable
        #PatientMonitoringTable
        class='material expandable'
        [columnMode]="'force'"
        [headerHeight]="30"
        [footerHeight]="30"
        [rowHeight]="30"
        [scrollbarV]="30"
        [rows]='rowsWorkaround'>

         <ngx-datatable-column
          [width]="50"
          [resizeable]="false"
          [sortable]="false"
          [draggable]="false"
          [canAutoResize]="false">

          <template let-row="row" ngx-datatable-cell-template>
            <a
              href="#"
              [class.icon-right]="!row.$$expanded"
              [class.icon-down]="row.$$expanded"
              title="Expand/Collapse Row"
              (click)="toggleExpandRow(row)"> >
            </a>
          </template>

        </ngx-datatable-column>

        <ngx-datatable-column name="Patient ID" width="80">
          <template let-row="row" ngx-datatable-cell-template>
            {{row.patientId}}
          </template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Device ID" width="80">
          <template let-row="row"  ngx-datatable-cell-template>
            {{row.deviceId}}
          </template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Device Type" width="80">
          <template let-row="row" ngx-datatable-cell-template>
            {{row.deviceName}}
          </template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Status" width="80">
          <template let-row="row" ngx-datatable-cell-template>
            {{row.status}}
          </template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Transmit Rate" width="80">
          <template let-row="row"  ngx-datatable-cell-template>
            {{row.dataRate}}
          </template>
        </ngx-datatable-column>

        <!-- Row Detail Template -->
        <ngx-datatable-row-detail [rowHeight]="80" #detailRow>
          <template let-row="row" ngx-datatable-row-detail-template>
            <div style="padding-left:35px;">
              <div><i>Sensor Details</i></div>
              <span #sensorInfo *ngFor="let sensor of row.sensors" (click)="selectSensor(sensor.name)">
                {{sensor.name}} {{sensor.status}}
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
      });
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
   console.log(patientDetails);
 }

 selectSensor(sensorName){
   console.log(sensorName);
 }

}
