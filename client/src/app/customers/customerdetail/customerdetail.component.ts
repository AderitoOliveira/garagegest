import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalCommunicationService } from './../../globalcommunicationservice';
import { Vehicle } from './../../vehicles/vehicles.model';
import { CustomerDetailService } from './customerdetail.service';



@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.scss'], 
  providers: [CustomerDetailService]
})
export class CustomerdetailComponent implements OnInit {

  headerName = 'Customer Detail';
  customer_detail:  any;

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
  dataSource = <Vehicle> (this.httpdata);
  //dataSource = null;

  constructor(private route: ActivatedRoute,  private customerDetailService: CustomerDetailService, private router: Router, private globalCommunictionService: GlobalCommunicationService) {
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
      this.dataSource = data as any;

      //this.dataSource.paginator = this.paginator;
      //this.dataSource.sort = this.sort;
    });
  }

  goBack() {
    this.router.navigate(['clients',], ); (3)
  }

}
