import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vehicle } from './../../vehicles/vehicles.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomerDetailService {
 
    httpdata = null;

    constructor(private httpClient: HttpClient) { }
   
    getCustomerVehicleDetails(customer: number): Observable<null> {
      
        console.log("Inside getCustomers");

        return this.httpClient.get('http://localhost:3000/customerVehicleDetails/' + customer).pipe(map((res:any) => res)) 
    }
}