import { Component } from '@angular/core';
import { MainBackgroundDirective } from '../../../Core/Directives/main-background.directive';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [
    MainBackgroundDirective,
    NgxEchartsDirective,
    DropdownModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
  providers: [provideEcharts()],
})
export class ChartComponent {
  title!: string;
  constructor(private translate: TranslateService) {
    translate.get('chart.title').subscribe({
      next: (v) => {
        this.title = v;
      },
    });
  }
  lang = localStorage.getItem('language') ?? 'en';
  chartOption!: EChartsOption;
  selectedDuration: any;
  ngOnInit() {
    this.chartOption = {
      tooltip: {
        backgroundColor: '#000',
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          label: { show: false },

          lineStyle: {
            type: 'solid',
            width: 2,
            color: '#8A74F9',
          },
        },
      },
      title: {

        right: '2%',
        top: '5%',
        textStyle: {
          fontSize: 18,
          fontWeight: 'bold',
          color: '#333',
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          "يناير",
          "فبراير",
          "مارس",
          "أبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
          "سبتمبر",
          "أكتوبر",
          "نوفمبر",
          "ديسمبر"
        ].reverse(),
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Consumption',
          showSymbol: false,

          data: [
            820, 932, 901, 934, 1290, 1330, 1320, 1110, 1230, 1450, 1500, 1600,
          ],
          type: 'line',
          smooth: true,
          areaStyle: { color: 'rgba(123, 97, 255, 0.2)' },
          itemStyle: {
            color: '#7B61FF', // Line color
          },
        },
      ],
      grid: {
        z: 2,
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      backgroundColor: '#f5f5f5',
    };
  }

}
