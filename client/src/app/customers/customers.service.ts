import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customers.model';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CustomerService {
 
    httpdata = <Customer>{};

    constructor(private httpClient: HttpClient) { }
   
    getCustomers(): Observable<Customer> {
      
        console.log("Inside getCustomers");
        /* this.httpClient.get<Vehicle>('http://localhost:3000/allclients').subscribe((data)=> {
            console.log(data); 
            this.httpdata = data;
          });

        return of(this.httpdata); */

        return this.httpClient.get('http://localhost:3000/allCustomers').pipe(map((res:any) => res)) 
    }
}