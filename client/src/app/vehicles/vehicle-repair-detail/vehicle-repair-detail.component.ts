import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GlobalCommunicationService } from '../../globalcommunicationservice';

@Component({
  selector: 'app-vehicle-repair-detail',
  templateUrl: './vehicle-repair-detail.component.html',
  styleUrls: ['./vehicle-repair-detail.component.scss']
})
export class VehicleRepairDetailComponent implements OnInit {

  vehicle_detail:  any;
  VEHICLE_ID = '';

  constructor(private router: Router, private route: ActivatedRoute, private globalCommunictionService: GlobalCommunicationService) {
    this.route.params.subscribe( params => {
      console.log(params);
      this.vehicle_detail  = params as any;
      this.VEHICLE_ID      = this.vehicle_detail.VEHICLE_ID;
    });
   }

  ngOnInit() {
    this.globalCommunictionService.changeData("Detalhe da Reparação");
  }

}
