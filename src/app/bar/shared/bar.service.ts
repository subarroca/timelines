import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Bar } from '../../bar/shared/bar';


@Injectable()
export class BarService {
  private startDateSubject: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());
  startDate$: Observable<Date> = this.startDateSubject.asObservable();

  private endDateSubject: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());
  endDate$: Observable<Date> = this.endDateSubject.asObservable();


  constructor() { }

  set startDate(date: Date) {
    this.startDateSubject.next(date);
  }
  get startDate() {
    return this.startDateSubject.value;
  }

  set endDate(date: Date) {
    this.endDateSubject.next(date);
  }
  get endDate() {
    return this.endDateSubject.value;
  }
  getPercent(date) {
    const lapse = +this.endDate - +this.startDate;
    const offset = +date - +this.startDate;

    return Math.round(100 * offset / lapse) / 100;
  }


  parseBar(bar: Bar) {
    const copy = new Bar(bar);

    copy.startPoint = this.getPercent(copy.startDate);
    copy.endPoint = this.getPercent(copy.endDate);
    copy.visible = !(copy.endPoint <= 0 || copy.startPoint >= 1);

    return copy;
  }

}
