import { Component, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './vehicles.model';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/';



@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})

export class VehiclesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'address'];
  dataSource: MatTableDataSource<Vehicle>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private httpClient: HttpClient) { 
  }

  httpdata;

  ngOnInit() {

    this.httpClient.get<Vehicle>('http://localhost:3000/allclients').subscribe((data: Vehicle)=> this.displaydata(data));
      //console.log(data);
      //alert(res);

  }
    
  displaydata(data) {
    this.httpdata = data;
    console.log(this.httpdata)
  }

  applyFilter(filterValue: string) {
    this.httpdata.filter = filterValue.trim().toLowerCase();

    if (this.httpdata.paginator) {
      this.httpdata.paginator.firstPage();
    }
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
