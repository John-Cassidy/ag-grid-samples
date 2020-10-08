import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-simplechart',
  templateUrl: './simplechart.component.html',
  styles: [],
})
export class SimplechartComponent implements OnInit {
  public options: any

  // data = [
  //   {
  //     quarter: 'Q1',
  //     spending: 450,
  //   },
  //   {
  //     quarter: 'Q2',
  //     spending: 560,
  //   },
  //   {
  //     quarter: 'Q3',
  //     spending: 600,
  //   },
  //   {
  //     quarter: 'Q4',
  //     spending: 700,
  //   },
  // ]

  data = [
    {
      beverage: 'Coffee',
      Q1: 450,
      Q2: 560,
      Q3: 600,
      Q4: 700,
    },
    {
      beverage: 'Tea',
      Q1: 270,
      Q2: 380,
      Q3: 450,
      Q4: 520,
    },
    {
      beverage: 'Milk',
      Q1: 180,
      Q2: 170,
      Q3: 190,
      Q4: 200,
    },
  ]

  constructor() {
    // this.options = {
    //   data: this.data,
    //   series: [
    //     {
    //       xKey: 'quarter',
    //       yKey: 'spending',
    //     },
    //   ],
    // }

    this.options = {
      data: this.data,
      series: [
        {
          type: 'column',
          xKey: 'beverage',
          yKeys: ['Q1', 'Q2', 'Q3', 'Q4'],
        },
      ],
    }
  }

  ngOnInit(): void {}
}
