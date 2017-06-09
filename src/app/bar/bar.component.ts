import { BarService } from './shared/bar.service';
import { Component, OnInit, Input } from '@angular/core';
import { Bar } from './shared/bar';

@Component({
  selector: 'kw-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input() set bar(bar: Bar) {
    this.parsedBar = this.barService.parseBar(bar);
  };
  @Input() width = 200;

  parsedBar: Bar;

  constructor(
    private barService: BarService
  ) { }

  ngOnInit() {
  }

}
