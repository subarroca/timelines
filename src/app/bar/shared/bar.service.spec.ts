import { TestBed, inject } from '@angular/core/testing';

import { BarService } from './bar-group.service';
import { Bar } from './bar';

describe('Service: BarGroup', () => {
  const day0 = new Date(2017, 0, 0);
  const day100 = new Date(2017, 0, 100);

  const day20 = new Date(2017, 0, 20);
  const day_20 = new Date(2017, 0, -20);
  const day120 = new Date(2017, 0, 120);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BarService]
    });
  });

  it('should be created', inject([BarService], (service: BarService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a start date and update observable', inject([BarService], (service: BarService) => {
    let startDate;
    service.startDate = day0;
    service.startDate$.subscribe(date => startDate = date);

    expect(service.startDate).toBe(day0);
    expect(startDate).toBe(day0);
  }));

  it('should have an end date and update observable', inject([BarService], (service: BarService) => {
    let endDate;
    service.endDate = day100;
    service.endDate$.subscribe(date => endDate = date);

    expect(service.endDate).toBe(day100);
    expect(endDate).toBe(day100);
  }));

  it('should return a percent for given date', inject([BarService], (service: BarService) => {
    let point;
    service.startDate = day0;
    service.endDate = day100;
    point = service.getPercent(day20);

    expect(point).toEqual(0.2);
  }));




  describe('(given a Bar)', () => {
    const barFull = {
      label: 'bar 0 100',
      startDate: day0,
      endDate: day100
    };
    const barBigger = {
      label: 'bar -20 120',
      startDate: day_20,
      endDate: day120
    };
    const barHidden = {
      label: 'bar hidden',
      startDate: day_20,
      endDate: day_20
    };


    it('should return a copy of the Bar', inject([BarService], (service: BarService) => {
      const originalBar = new Bar(barFull);
      const parsedBar = service.parseBar(originalBar);

      expect(originalBar).not.toBe(parsedBar);
      expect(originalBar.label).toBe(parsedBar.label);
      expect(originalBar.startDate).toBe(parsedBar.startDate);
      expect(originalBar.endDate).toBe(parsedBar.endDate);
    }));

    it('should return start and end points based on service range', inject([BarService], (service: BarService) => {
      service.endDate = day100;
      service.startDate = day0;

      const originalBar = new Bar(barFull);
      const parsedBar = service.parseBar(originalBar);

      expect(parsedBar.startPoint).toEqual(0);
      expect(parsedBar.endPoint).toEqual(1);
    }));

    it('should not limit points to [0,1]', inject([BarService], (service: BarService) => {
      service.endDate = day100;
      service.startDate = day0;

      const originalBar = new Bar(barBigger);
      const parsedBar = service.parseBar(originalBar);

      expect(parsedBar.startPoint).toBeLessThan(0);
      expect(parsedBar.endPoint).toBeGreaterThan(1);
    }));


    it('should hide if out of service range', inject([BarService], (service: BarService) => {
      service.endDate = day100;
      service.startDate = day0;

      const originalBar = new Bar(barHidden);
      const parsedBar = service.parseBar(originalBar);

      expect(parsedBar.visible).toBe(false);
    }));
  });
});
