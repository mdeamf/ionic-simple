import { Component } from '@angular/core';
import { ChartColor, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  doughnutChartLabels: Array<String> = ['Pontuação', 'Pendente'];
  doughnutChartData: Array<any> = [90, 10];
  doughnutChartType: String = 'doughnut';
  doughnutChartColors: Array<any> = [
    {
      backgroundColor: ['#64DD17', '#37474F']
    }
  ];
  doughnutChartOptions = {
    legend: false,
    aspectRatio: 1.5,
    cutoutPercentage: 80
  }

  constructor() { }

}
