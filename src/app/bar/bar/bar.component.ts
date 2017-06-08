import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kw-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input() start: Date;
  @Input() end: Date;
  @Input() label: string;

  constructor() { }

  ngOnInit() {
  }

}
