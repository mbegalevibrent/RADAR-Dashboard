import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-patient-monitoring',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="header">
    <div class="title">{{title}}</div>
  </div>
  <div class="container">
    <ngx-datatable
      [rows]="rows"
      [columns]="columns"
      [headerHeight]="50"
      [rowHeight]="25"
      [scrollbarV]="true">
    </ngx-datatable>
  </div>
  `,
  styleUrls: ['./table-patient-monitoring.component.scss']
})
export class TablePatientMonitoringComponent implements OnInit {

  rows = [
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D84', dataRate: 1, status: 0, heartRate: 89, temperature: '12˚C' },
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D85', dataRate: 3, status: 0, heartRate: 89, temperature: '12˚C' },
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D84', dataRate: 12, status: 0, heartRate: 89, temperature: '12˚C' },
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D85', dataRate: 3, status: 0, heartRate: 89, temperature: '12˚C' },
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D84', dataRate: 12, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D85', dataRate: 3, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D84', dataRate: 12, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D85', dataRate: 3, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D84', dataRate: 12, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D85', dataRate: 3, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D84', dataRate: 12, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D85', dataRate: 3, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D84', dataRate: 12, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D85', dataRate: 3, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D84', dataRate: 12, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D85', dataRate: 3, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D84', dataRate: 12, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D85', dataRate: 3, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D85', dataRate: 3, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D84', dataRate: 12, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D85', dataRate: 3, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D84', dataRate: 12, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D85', dataRate: 3, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D84', dataRate: 12, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D85', dataRate: 3, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D84', dataRate: 12, status: 0, heartRate: 89, temperature: '12˚C'},
     { 'Patient ID': '1A47C', deviceId: '1A47C-12D85', dataRate: 3, status: 0, heartRate: 89, temperature: '12˚C'},



   ];
   columns = [
     { prop: 'Patient ID' },
     { name: 'Device ID' },
     { name: 'DataRate' },
     { name: 'Status' },
     { name: 'HeartRate' },
     { name: 'Temperature' },
   ];

  @Input() title: string;

  ngOnInit() {
  }
}
