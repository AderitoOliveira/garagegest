import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Routes, RouterModule, ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-customerdetail',
  templateUrl: './customerdetail.component.html',
  styleUrls: ['./customerdetail.component.scss']
})
export class CustomerdetailComponent implements OnInit {

  name: string = '';
  customer_detail:  any;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe( params => {
      console.log(params);
      this.customer_detail = params as any;
      this.name = params.NAME;
    });
   }

  ngOnInit() {
    console.log("VALOR: " + this.customer_detail.NAME);
  }

  ngOnDestroy() {

  }

  goBack() {
    this.router.navigate(['clients',], ); (3)
  }

}
