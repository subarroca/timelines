import { Component, OnInit } from '@angular/core';

import { BarService } from './../bar/shared/bar.service';

@Component({
  selector: 'kw-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  startDate: Date = new Date(2010, 0, 1);
  endDate: Date = new Date();

  constructor(
    private barService: BarService
  ) { }

  ngOnInit() {
    this.barService.startDate = this.startDate;
    this.barService.endDate = this.endDate;
  }

}
