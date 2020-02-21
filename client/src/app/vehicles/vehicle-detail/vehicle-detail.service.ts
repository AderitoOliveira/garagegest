import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleRepair } from './../vehicle-repair/vehicle-repair.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class VehicleService {
 
    httpdata = <VehicleRepair>{};

    constructor(private httpClient: HttpClient) { }
   
    getVehiclesRepair(vehicleid : number): Observable<VehicleRepair> {
      
        console.log("Inside getVehicleRepairHeader");
        return this.httpClient.get('http://localhost:3000/getVehicleRepairInfo/' + vehicleid).pipe(map((res:any) => res)) 
    }
  }