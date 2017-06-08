import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarGroupComponent } from './bar-group.component';
import { BarComponent } from './../bar/bar.component';

describe('BarGroupComponent', () => {
  let component: BarGroupComponent;
  let fixture: ComponentFixture<BarGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BarGroupComponent,
        BarComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
