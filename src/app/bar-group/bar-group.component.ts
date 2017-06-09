import { Component, OnInit } from '@angular/core';

import { Bar } from '../bar/shared/bar';

@Component({
  selector: 'kw-bar-group',
  templateUrl: './bar-group.component.html',
  styleUrls: ['./bar-group.component.scss']
})
export class BarGroupComponent implements OnInit {
  bars: Bar[] = [
    new Bar({
      startDate: new Date(2012, 0, 1),
      endDate: new Date(2016, 0, 1),
      label: 'bar 1'
    }),
    new Bar({
      startDate: new Date(2014, 0, 1),
      endDate: new Date(2017, 0, 1),
      label: 'bar 2'
    }),
    new Bar({
      startDate: new Date(2016, 0, 1),
      endDate: new Date(2018, 0, 1),
      label: 'bar 3'
    })
  ];

  constructor() { }

  ngOnInit() { }

}
