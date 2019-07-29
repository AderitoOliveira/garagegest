import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { Customer } from './customers.model';
import { CustomerService } from './customers.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
  providers: [CustomerService]
})
export class CustomersComponent implements OnInit {
  httpdata = null;
  filterValue = null;
  dataSource = new MatTableDataSource<Customer>(this.httpdata);

  displayedColumns: string[] = ['NAME', 'ADDRESS', 'CITY_LOCATION', 'FISCAL_CODE', 'IDENTITY_CARD', 'PHONE_NUMBER', 'EMAIL_ADDRESS', 'NICKNAME', 'CREATED_DATE', 'MODIFIED_DATE', 'ACTIONS'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private httpClient: HttpClient, private customerService: CustomerService, private router: Router) { }

  ngOnInit() {
    console.log("Inside ngOnInit");
      this.getCustomers();
      /* setTimeout(()=>{ 
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 3000); */
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(data => {
      console.log(data); 
      this.dataSource.data = data as any;

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  displaydata(data) {
    this.httpdata = data;
    this.dataSource = new MatTableDataSource(data);
    console.log(this.httpdata)
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue.trim().toLowerCase();

    console.log(filterValue);

    this.dataSource.filter = filterValue;

    /* if (this.dataSource) {
      this.dataSource.paginator.firstPage();
    } */
  }

  delete(row) {
      this.router.navigate(['customerdetail']); (3)
      //alert(row);
  }
}
