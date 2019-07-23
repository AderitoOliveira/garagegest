import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './vehicles.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class VehicleService {
 
    httpdata = <Vehicle>{};

    constructor(private httpClient: HttpClient) { }
   
    getVehicles(): Observable<Vehicle> {
      
        console.log("Inside getVehicles");
        /* this.httpClient.get<Vehicle>('http://localhost:3000/allclients').subscribe((data)=> {
            console.log(data); 
            this.httpdata = data;
          });

        return of(this.httpdata); */

        return this.httpClient.get('http://localhost:3000/allVehicles').pipe(map((res:any) => res)) 
    }
  }