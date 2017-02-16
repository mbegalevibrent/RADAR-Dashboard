import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../../shared/app.config';
import { Tile } from '../../models/tile.model';
import * as fromRoot from '../../store';
import * as gridAction from '../../store/grid/grid.actions';

@Component({
  selector: 'app-dashboard',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-ui-progress *ngIf="(loading$ | async) === true"></app-ui-progress>
    <md-grid-list *ngIf="(loading$ | async) === false"
      [cols]="gridCols" rowHeight="fit">
      <md-grid-tile *ngFor="let tile of tiles$ | async"
        [colspan]="tile.cols" [rowspan]="tile.rows">
        <app-chart-container *ngIf="isTileOfType(tile, COMPONENT_TYPE.chart)" [tile]="tile"></app-chart-container>
        <app-table-container *ngIf="isTileOfType(tile, COMPONENT_TYPE.table)" [tile]="tile"></app-table-container>
      </md-grid-tile>
    </md-grid-list>
  `,
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tiles$: Observable<Tile[]>;
  loading$: Observable<boolean>;
  gridCols = AppConfig.GRID_COLS;

  COMPONENT_TYPE = {
    chart: 'chart',
    table: 'table',
  };

  // TODO: update grid when MD adds responsive support
  // [https://github.com/angular/material2/blob/master/src/lib/grid-list/README.md]
  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.tiles$ = this.store.let(fromRoot.getGridTiles);
    this.loading$ = this.store.let(fromRoot.getGridLoading);
  }

  ngOnInit() {
    this.store.dispatch(new gridAction.Load());
  }

  isTileOfType(tile, type){
      if(tile.type.includes(type)){
          return true;
      }
      return false;
  }
}
