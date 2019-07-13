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

  ngOnInit() {

    this.httpClient.get<Vehicle>('http://localhost:3000/xpto').subscribe((data: Vehicle)=>{
      console.log(data[0].NAME);
      console.log(data.ADDRESS);
      //alert(res);
    });
  }

  myFunc(){
    alert("Button Clicked!!!!!");
    /* this.httpClient.get('http://localhost:3000/xpto').subscribe((res)=>{
      //console.log(res);
      alert(res);
    }); */
    this.httpClient.get('http://localhost:3000/xpto').subscribe((data)=>{
      console.log(data);
      //alert(res);
    });
  }

}
