
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { AppConfig } from '../../shared/app.config';

/**
 *  BaseComponent to be extended by chart components
 *
 *  The component appends an SVG element, it doesn't need a template.
 *  It has an empty template for testing purposes only.
 *
 *  Use the following lifecycle methods in the extended components:
 *  1. init() use to initiate the chart elements
 *  2. update() use if you need to update values before draw()
 *  3. draw() use to draw the chart elements
 */
@Component({
  template: '',
})
export class TableBaseComponent implements OnInit {

  data: any;

  @Input()
  set tableData(value) {
    this.data = value;
  }

  get tableData() {
    return this.data;
  }

  @Input()
  margin = AppConfig.TABLE_MARGIN;

  ngOnInit() {
  }


}
