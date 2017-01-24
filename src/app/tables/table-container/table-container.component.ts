import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Tile } from '../../models/tile.model';

@Component({
  selector: 'app-table-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-table-patient-monitoring *ngIf="tile.type === TABLE_TYPE.PM"
      [title]="title" class="app-chart"></app-table-patient-monitoring>
  `,
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent {

  TABLE_TYPE = {
    PM: 'patient-monitoring',
  };

  @Input() tile: Tile;

  get title() {
    return this.tile.title;
  }
}
