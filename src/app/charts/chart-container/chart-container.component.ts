import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Tile } from '../../models/tile.model';

@Component({
  selector: 'app-chart-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-chart-heart-rate *ngIf="isChartOfType(tile, CHART_TYPE.HR)"
      [title]="title" class="app-chart"></app-chart-heart-rate>
    <app-chart-empty *ngIf="isChartOfType(tile, CHART_TYPE.EMPTY)"
      [title]="title" class="app-chart"></app-chart-empty>
  `,
  styleUrls: ['./chart-container.component.scss']
})
export class ChartContainerComponent {

  CHART_TYPE = {
    HR: 'heart-rate',
    EMPTY: 'empty',
  };

  @Input() tile: Tile;

  get title() {
    return this.tile.title;
  }

  isChartOfType(tile, type){
      if(tile.type.includes(type)){
          return true;
      }
      return false;
  }
}
