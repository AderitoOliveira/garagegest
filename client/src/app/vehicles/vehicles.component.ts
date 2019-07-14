import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './vehicles.model';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})

export class VehiclesComponent implements OnInit {

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
