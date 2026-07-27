
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  imports: [BaseChartDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true
})
export class ChartComponent {
  @Input() chartData: ChartData | null = null;;
  @Input() chartType: ChartType = 'line';
  @Input() chartOptions: ChartConfiguration['options']={
        responsive:true
  }

  constructor() {
    console.log("ChartComponent initialized!");
  }

}
