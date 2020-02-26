import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalService } from '../_modal';

import { Customer } from './customers.model';
import { CustomerService } from './customers.service';
import { GlobalCommunicationService } from '../globalcommunicationservice';
import { liveSearch } from '../util/utilfunctions';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
  httpdata = null;
  filterValue = null;
  //dataSource = new MatTableDataSource<Customer>(this.httpdata);
  dataSource = <Customer> (this.httpdata);

  displayedColumns: string[] = ['NAME', 'ADDRESS', 'CITY_LOCATION', 'FISCAL_CODE', 'IDENTITY_CARD', 'PHONE_NUMBER', 'EMAIL_ADDRESS', 'NICKNAME', 'CREATED_DATE', 'MODIFIED_DATE', 'ACTIONS'];

  private customerSubject = new Subject<string>();

  constructor(private httpClient: HttpClient, private customerService: CustomerService, private router: Router, private globalCommunictionService: GlobalCommunicationService, private modalService: ModalService) { }

  ngOnInit() {
    console.log("Inside ngOnInit");
      this.getCustomers();
      /* setTimeout(()=>{ 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 3000); */
      this.globalCommunictionService.changeData("Lista de todos os Clientes");
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(data => {
      console.log(data); 
      this.dataSource = data as any;

      //this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;
    });
  }

  displaydata(data) {
    this.httpdata = data;
    //this.dataSource = new MatTableDataSource(data);
    console.log(this.httpdata)
  }

  readonly customer = this.customerSubject.pipe(
    liveSearch(customer => this.customerService.filterEids(customer))
  );

  customerDetails(row) {
    console.log(row);
      this.router.navigate(['customerdetail', row], { skipLocationChange: true }); (3)
      //alert(row);
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

}
