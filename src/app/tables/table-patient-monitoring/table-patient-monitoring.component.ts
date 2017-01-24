import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-table-patient-monitoring',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
        <p> Test
    </div>
  `,
  styleUrls: ['./table-patient-monitoring.component.scss']
})
export class TablePatientMonitoringComponent implements OnInit {

  @Input() title: string;

  ngOnInit() {
  }
}
