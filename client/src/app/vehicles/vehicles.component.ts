import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './vehicles.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

import { VehicleService } from './vehicles.service';
import { GlobalCommunicationService } from '../globalcommunicationservice';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  providers: [VehicleService]
})

export class VehiclesComponent implements OnInit {
  httpdata = null;
  filterValue = null;
  displayedColumns: string[] = ['REGISTRATION_PLATE' ,'CAR_BRAND' ,'CAR_MODEL' ,'KMS_REGISTERED' ,'CYLINDER_CAPACITY' ,'REGISTRATION_DATE' ,'FABRICATION_DATE' ,'VEHICLE_IDENTIFICATION_NUMBER' ,'KILLOWATT' ,'HORSEPOWER' ,'FUEL' ,'CREATED_DATE' ,'MODIFIED_DATE'];
  dataSource = new MatTableDataSource<Vehicle>(this.httpdata);


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router,  private vehicleService: VehicleService,private globalCommunictionService: GlobalCommunicationService) { 
  }

  ngOnInit() {

    //this.httpClient.get<Vehicle>('http://localhost:3000/allclients').subscribe((data: Vehicle)=> this.displaydata(data));
      //console.log(data);
      //alert(res);
      console.log("Inside ngOnInit");
      this.getVehicles();
      //this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;
      /* setTimeout(()=>{ 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 3000); */
      this.globalCommunictionService.changeData("Lista de todos os Veículos");

  }
    
  displaydata(data) {
    this.httpdata = data;
    this.dataSource = new MatTableDataSource(data);
    console.log(this.httpdata)
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue.trim().toLowerCase();

    console.log(filterValue);

    this.dataSource.filter = filterValue;

  }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      console.log(data); 
      this.dataSource.data = data as any;

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  vehicleDetails(row) {
    console.log(row);
      this.router.navigate(['vehicledetail', row], { skipLocationChange: true }); (3)
  }


}
