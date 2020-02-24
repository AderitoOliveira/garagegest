import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleRepairDetail, RepairDetailLine } from './vehicle-repair-detail.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class VehicleRepairDetailService {
 
    httpdata = <VehicleRepairDetail>{};

    constructor(private httpClient: HttpClient) { }
   
    /* getVehicleRepairDetail(): Observable<VehicleRepairDetail> {
      
        console.log("Inside getVehicles");
        return this.httpClient.get('http://localhost:3000/allVehicles').pipe(map((res:any) => res)) 
    } */

    getVehiclesRepairDetail(vehicleid : number, repairid : number): Observable<[RepairDetailLine]> {
      
        let params: any = {'vehicleid': vehicleid, 'repairid': repairid};

        console.log("Inside getVehiclesRepairDetail");
        //eturn this.httpClient.get('http://localhost:3000/getVehicleRepairInfo/' + vehicleid + "/" + repairid).pipe(map((res:any) => res)) 
        return this.httpClient.get('http://localhost:3000/customerVehicleRepairDetail/', { params }).pipe(map((res:any) => res)) 

    }
}