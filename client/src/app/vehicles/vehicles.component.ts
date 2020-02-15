import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './vehicles.model';
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
  dataSource = <Vehicle> (this.httpdata);


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
    
  /* displaydata(data) {
    this.httpdata = data;
    this.dataSource = new MatTableDataSource(data);
    console.log(this.httpdata)
  } */

  /* applyFilter(filterValue: string) {
    this.filterValue = filterValue.trim().toLowerCase();

    console.log(filterValue);

  } */

  getVehicles(): void {
    this.vehicleService.getVehicles().subscribe(data => {
      console.log(data); 
      this.dataSource = data
    });
  }

  vehicleDetails(row) {
    console.log(row);
      this.router.navigate(['vehicledetail', row], { skipLocationChange: true }); (3)
  }


}
