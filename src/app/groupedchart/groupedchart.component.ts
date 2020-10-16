import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-groupedchart',
  templateUrl: './groupedchart.component.html',
  styles: [],
})
export class GroupedchartComponent implements OnInit {
  public options: any

  constructor() {
    this.options = {
      autoSize: true,
      data,
      title: {
        text: 'Regular Internet Users',
        fontSize: 18,
      },
      subtitle: { text: 'Source: Office for National Statistics' },
      series: [
        {
          type: 'column',
          xKey: 'year',
          yKeys: ['16-24', '25-34', '35-44', '45-54', '55-64', '65-74', '75+'],
          grouped: true,
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'bottom',
        },
        {
          type: 'number',
          position: 'left',
          label: {
            formatter: (params: any): string => {
              return params.value / 1000 + 'M'
            },
          },
        },
      ],
    }
  }

  ngOnInit(): void {}
}

export const data = [
  {
    year: '2012',
    '16-24': 7088,
    '25-34': 8162,
    '35-44': 7986,
    '45-54': 7694,
    '55-64': 5624,
    '65-74': 3153,
    '75+': 1057,
  },
  {
    year: '2013',
    '16-24': 7075,
    '25-34': 8457,
    '35-44': 7952,
    '45-54': 8005,
    '55-64': 5821,
    '65-74': 3562,
    '75+': 1371,
  },
  {
    year: '2014',
    '16-24': 7074,
    '25-34': 8660,
    '35-44': 7900,
    '45-54': 8290,
    '55-64': 6060,
    '65-74': 3939,
    '75+': 1534,
  },
  {
    year: '2015',
    '16-24': 7155,
    '25-34': 8582,
    '35-44': 8053,
    '45-54': 8498,
    '55-64': 6361,
    '65-74': 4390,
    '75+': 1632,
  },
  {
    year: '2016',
    '16-24': 7129,
    '25-34': 8720,
    '35-44': 8129,
    '45-54': 8686,
    '55-64': 6607,
    '65-74': 4721,
    '75+': 1925,
  },
  {
    year: '2017',
    '16-24': 7036,
    '25-34': 8815,
    '35-44': 8118,
    '45-54': 8803,
    '55-64': 6888,
    '65-74': 5031,
    '75+': 2050,
  },
  {
    year: '2018',
    '16-24': 6992,
    '25-34': 8894,
    '35-44': 8145,
    '45-54': 8814,
    '55-64': 7189,
    '65-74': 5264,
    '75+': 2262,
  },
  {
    year: '2019',
    '16-24': 6877,
    '25-34': 8895,
    '35-44': 8243,
    '45-54': 8810,
    '55-64': 7495,
    '65-74': 5339,
    '75+': 2471,
  },
]