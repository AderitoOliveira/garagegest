import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalCommunicationService } from './../../globalcommunicationservice';

import { VehicleService } from './vehicle-detail.service';
import { VehicleRepair } from './../vehicle-repair/vehicle-repair.model';


@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.scss'],
  providers: [VehicleService]
})
export class VehicleDetailComponent implements OnInit {

  httpdata = null;
  filterValue = null;
  dataSource_size : number = 0;
  dataSource = <VehicleRepair> (this.httpdata);

  vehicle_detail:  any;
  VEHICLE_ID                    = '';
  CLIENT_ID                     = '';
  REGISTRATION_PLATE            = '';
  CAR_BRAND                     = '';
  CAR_MODEL                     = '';
  KMS_REGISTERED                = '';
  CYLINDER_CAPACITY             = '';
  REGISTRATION_DATE             = '';
  FABRICATION_DATE              = '';
  VEHICLE_IDENTIFICATION_NUMBER = '';
  KILLOWATT                     = '';
  HORSEPOWER                    = '';
  FUEL                          = '';
  CREATED_DATE                  = '';
  MODIFIED_DATE                 = '';

  constructor(private router: Router, private route: ActivatedRoute, private globalCommunictionService: GlobalCommunicationService, private vehicleservice: VehicleService) { 
    this.route.params.subscribe( params => {
      console.log(params);
      this.vehicle_detail                 = params as any;
      this.VEHICLE_ID                     = params.VEHICLE_ID;
      this.REGISTRATION_PLATE             = params.REGISTRATION_PLATE;
      this.CLIENT_ID                      = params.CLIENT_ID;
      this.CAR_BRAND                      = params.CAR_BRAND;
      this.CAR_MODEL                      = params.CAR_MODEL;
      this.KMS_REGISTERED                 = params.KMS_REGISTERED;
      this.CYLINDER_CAPACITY              = params.CYLINDER_CAPACITY;
      this.REGISTRATION_DATE              = params.REGISTRATION_DATE;
      this.FABRICATION_DATE               = params.FABRICATION_DATE;
      this.VEHICLE_IDENTIFICATION_NUMBER  = params.VEHICLE_IDENTIFICATION_NUMBER;
      this.KILLOWATT                      = params.KILLOWATT;
      this.HORSEPOWER                     = params.HORSEPOWER;
      this.FUEL                           = params.FUEL;
    });
  }

  ngOnInit() {
    this.globalCommunictionService.changeData("Detalhes do Veículo " + this.vehicle_detail.REGISTRATION_PLATE);
    this.getVehicleRepairInfo(this.vehicle_detail.VEHICLE_ID);
  }

  getVehicleRepairInfo(vehicleid:number): void {
    this.vehicleservice.getVehiclesRepair(vehicleid).subscribe(data => {
      console.log(data); 
      this.dataSource = data;
      this.dataSource_size = this.dataSource.length;
    });
  }

  vehicleRepairDetails(row) {
    console.log(row);
      this.router.navigate(['vehiclerepairdetail', row], { skipLocationChange: true }); (3)
      //alert(row);
  }

}
