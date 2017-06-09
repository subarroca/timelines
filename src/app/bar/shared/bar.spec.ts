import { TestBed, inject } from '@angular/core/testing';

import { BarService } from './bar-group.service';
import { Bar } from './bar';


describe('Model: Bar', () => {
  const day0 = new Date(2017, 0, 0);
  const day100 = new Date(2017, 0, 100);

  const bar1 = {
    label: 'bar1',
    startDate: day0,
    endDate: day100
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarService]
    });
  });

  it('should have a label', () => {
    const bar = new Bar(bar1);

    expect(bar.label).toBe('bar1');
  });

  it('should have a start date', () => {
    const bar = new Bar(bar1);

    expect(bar.startDate).toBe(day0);
  });

  it('should have a end date', () => {
    const bar = new Bar(bar1);

    expect(bar.endDate).toBe(day100);
  });

  it('should set dates in order', () => {
    const bar = new Bar({
      label: 'bar1',
      endDate: day0,
      startDate: day100
    });

    expect(bar.endDate).toBe(day100);
  });
});
