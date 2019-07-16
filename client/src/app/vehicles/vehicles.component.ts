import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './vehicles.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/';

import { VehicleService } from './vehicles.service';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
  providers: [VehicleService]
})

export class VehiclesComponent implements OnInit {
  httpdata = null;
  filterValue = null;
  displayedColumns: string[] = ['name', 'address'];
  dataSource = new MatTableDataSource<Vehicle>(this.httpdata);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private httpClient: HttpClient, private vehicleService: VehicleService) { 
  }
  //httpdata = <Vehicle>{};

  ngOnInit() {

    //this.httpClient.get<Vehicle>('http://localhost:3000/allclients').subscribe((data: Vehicle)=> this.displaydata(data));
      //console.log(data);
      //alert(res);
      console.log("Inside ngOnInit");
      this.getVehicles();
      setTimeout(()=>{ 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 3000);

  }
    
  displaydata(data) {
    this.httpdata = data;
    this.dataSource = new MatTableDataSource(data);
    console.log(this.httpdata)
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue.trim().toLowerCase();

    console.log(filterValue);

    if (this.httpdata.NAME) {
      this.dataSource.paginator.firstPage();
    }
  }

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      console.log(data); 
      this.dataSource.data = data as any;
    });
  }

  myFunc(){
    alert("Button Clicked!!!!!");
    /* this.httpClient.get('http://localhost:3000/xpto').subscribe((res)=>{
      //console.log(res);
      alert(res);
    }); */
    this.httpClient.get('http://localhost:3000/allclients').subscribe((data)=>{
      console.log(data);
      //alert(res);
    });
  }

}
