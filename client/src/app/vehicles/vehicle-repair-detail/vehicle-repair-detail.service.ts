import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleRepairDetail } from './vehicle-repair-detail.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class VehicleRepairDetailService {
 
    httpdata = <VehicleRepairDetail>{};

    constructor(private httpClient: HttpClient) { }
   
    getVehicleRepairDetail(): Observable<VehicleRepairDetail> {
      
        console.log("Inside getVehicles");
        return this.httpClient.get('http://localhost:3000/allVehicles').pipe(map((res:any) => res)) 
    }
}