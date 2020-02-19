import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleRepairDetailComponent } from './vehicle-repair-detail.component';

describe('VehicleRepairDetailComponent', () => {
  let component: VehicleRepairDetailComponent;
  let fixture: ComponentFixture<VehicleRepairDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleRepairDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleRepairDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
