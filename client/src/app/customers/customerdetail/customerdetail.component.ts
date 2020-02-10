import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';
import { GlobalCommunicationService } from './../../globalcommunicationservice';

@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.scss']
})
export class CustomerdetailComponent implements OnInit {

  headerName = 'Customer Detail';
  name = '';
  customer_detail:  any;
  constructor(private route: ActivatedRoute, private router: Router, private globalCommunictionService: GlobalCommunicationService) {
    this.route.params.subscribe( params => {
      console.log(params);
      this.customer_detail = params as any;
      this.name = params.NAME;
    });

   }

  ngOnInit() {

    console.log("VALOR: " + this.customer_detail.NAME);
    this.globalCommunictionService.changeData("Detalhes do client " + this.customer_detail.NAME);
  }

  ngOnDestroy() {
    this.globalCommunictionService.changeData("Main Page");
  }

  goBack() {
    this.router.navigate(['clients',], ); (3)
  }

}
