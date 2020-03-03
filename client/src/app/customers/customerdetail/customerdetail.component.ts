import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalCommunicationService } from './../../globalcommunicationservice';
import { Vehicle } from './../../vehicles/vehicles.model';
import { CustomerDetailService } from './customerdetail.service';

import { ModalService } from '../../_modal';

import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';

/* const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']; */

  const states = [{"id":0, "name": "XPTO"}, {"id":1, "name": "XYZ"}];

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.scss'], 
  providers: [CustomerDetailService]
})
export class CustomerdetailComponent implements OnInit {

  headerName = 'Customer Detail';
  customer_detail:  any;
  ADD_REPAIR_DETAIL : boolean = false;

  CLIENT_ID     = '';
  NAME          = '';
  ADDRESS       = '';
  CITY_LOCATION = '';
  FISCAL_CODE   = '';
  IDENTITY_CARD = '';
  PHONE_NUMBER  = '';
  EMAIL_ADDRESS = '';
  NICKNAME      = '';
  CREATED_DATE  = '';
  MODIFIED_DATE = '';

  httpdata = null;
  //dataSource = <Vehicle> (this.httpdata);
  dataSource : [Vehicle];
  dataSource_size : number = 0;
  

  constructor(private route: ActivatedRoute,  private customerDetailService: CustomerDetailService, private router: Router, private globalCommunictionService: GlobalCommunicationService,private modalService: ModalService) {
    this.route.params.subscribe( params => {
      console.log(params);
      this.customer_detail  = params as any;
      this.CLIENT_ID        = params.CLIENT_ID;
      this.NAME             = params.NAME;
      this.ADDRESS          = params.ADDRESS;
      this.CITY_LOCATION    = params.CITY_LOCATION;
      this.FISCAL_CODE      = params.FISCAL_CODE;
      this.IDENTITY_CARD    = params.IDENTITY_CARD;
      this.PHONE_NUMBER     = params.PHONE_NUMBER;
      this.EMAIL_ADDRESS    = params.EMAIL_ADDRESS;
      this.NICKNAME         = params.NICKNAME;

    });

   }

  ngOnInit() {

    this.getCustomerVehicleDetail(this.customer_detail.CLIENT_ID);
    console.log("VALOR: " + this.customer_detail.NAME);
    this.globalCommunictionService.changeData("Detalhes do client " + this.customer_detail.NAME);
  }

  ngOnDestroy() {
    this.globalCommunictionService.changeData("Main Page");
  }

  getCustomerVehicleDetail(client_id: number): void {
    this.customerDetailService.getCustomerVehicleDetails(client_id).subscribe(data => {
      console.log(data); 
      this.dataSource = data;
      this.dataSource_size = this.dataSource.length;
    });
  }

  vehicleDetails(row) {
    console.log(row);
      this.router.navigate(['vehicledetail', row], { skipLocationChange: true }); (3)
  }

  addRepairDetail () {
    if(this.ADD_REPAIR_DETAIL == false) {
      this.ADD_REPAIR_DETAIL = true;
    } else {
      this.ADD_REPAIR_DETAIL = false;
    }
  }

  goBack() {
    this.router.navigate(['clients',], ); (3)
  }

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
      this.modalService.close(id);
  }

  logEvent(value : []) {
    console.log(value["name"]);
  }

  formatter = (x: {name: string}) => x.name;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      /* map(term => term.length < 2 ? []
        : states.filter(v => v["name"].toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)) */
        map(term => term === '' ? []
        : states.filter(v => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    )

}
