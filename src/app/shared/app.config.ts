import { ChartGradientColors, ChartMargin } from '../models/chart.model';
import { TableMargin } from '../models/table.model'

export class AppConfig {
  // Grid Config
  static GRID_COLS: number = 4;

  // CHART Config
  static CHART_MARGIN: ChartMargin = {
    top: 16, right: 16, bottom: 32, left: 48
  };
  static CHART_GRADIENT_COLORS: ChartGradientColors[] = [
    { offset: '0%', color: '#2ED8E5' },
    { offset: '50%', color: '#F8E81C' },
    { offset: '100%', color: '#FF9100' },
  ];
  static CHART_GRADIENT_STOPS = {
    'y1': 60,
    'y2': 120,
  };

  // TABLE Config
  static TABLE_MARGIN: TableMargin = {
    top: 16, right: 16, bottom: 32, left: 48
  };
}
