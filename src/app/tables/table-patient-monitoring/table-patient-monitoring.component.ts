import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-table-patient-monitoring',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="header">
    <div class="title">{{title}}</div>
  </div>
  <div class="container">
  </div>
  `,
  styleUrls: ['./table-patient-monitoring.component.scss']
})
export class TablePatientMonitoringComponent implements OnInit {

  @Input() title: string;

  ngOnInit() {
  }
}
