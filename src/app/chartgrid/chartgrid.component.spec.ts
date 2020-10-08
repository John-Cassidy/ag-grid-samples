import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartgridComponent } from './chartgrid.component';

describe('ChartgridComponent', () => {
  let component: ChartgridComponent;
  let fixture: ComponentFixture<ChartgridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartgridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
