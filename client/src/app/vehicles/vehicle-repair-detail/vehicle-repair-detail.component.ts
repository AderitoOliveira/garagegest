import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GlobalCommunicationService } from '../../globalcommunicationservice';

import { RepairDetailLine } from './vehicle-repair-detail.model';
import { VehicleRepairDetailService } from './vehicle-repair-detail.service';

@Component({
  selector: 'app-vehicle-repair-detail',
  templateUrl: './vehicle-repair-detail.component.html',
  styleUrls: ['./vehicle-repair-detail.component.scss'],
  providers: [VehicleRepairDetailService]
})
export class VehicleRepairDetailComponent implements OnInit {

  vehicle_detail:  any;
  VEHICLE_ID = 0;
  REPAIR_ID  = 0;
  BRAND      = 'VOLVO';
  MODEL      = 'S40';
  LICENSE_PLATE = '15-47-ZA';
  KMS_REGISTERED = 120000;
  httpdata = null;
  dynamicArray: Array<RepairDetailLine> = []; 
  //dynamicArray = <RepairDetailLine> (this.httpdata);
  newDynamic: any = {};  
  dataSource : [RepairDetailLine];

  constructor(private router: Router, private route: ActivatedRoute, private globalCommunictionService: GlobalCommunicationService, private vehicleRepairDetailService: VehicleRepairDetailService) {
    this.route.params.subscribe( params => {
      console.log(params);
      this.vehicle_detail  = params as any;
      this.VEHICLE_ID      = this.vehicle_detail.VEHICLE_ID;
      this.REPAIR_ID       = this.vehicle_detail.REPAIR_ID;
    });
   }

  ngOnInit() {
    this.getVehicleRepairDetail(this.VEHICLE_ID, this.REPAIR_ID);
    this.globalCommunictionService.changeData("Detalhe da Reparação");
  }

  getVehicleRepairDetail(vehicleid:number, repairid:number): void {
    this.vehicleRepairDetailService.getVehiclesRepairDetail(vehicleid, repairid).subscribe(data => {
      console.log(data); 
      this.dataSource = data;
      for(var i = 0; i < this.dataSource.length; i++) {
        this.dynamicArray.push(this.dataSource[i]); 
      }
      this.newDynamic = {DESCRIPTION: "", QUANTITY: "", UNIT_PRICE:"", VALUE:""}; 
      this.dynamicArray.push(this.newDynamic);  
    });
  }

  addRow(index) {    
    this.newDynamic = {DESCRIPTION: "", QUANTITY: "", UNIT_PRICE:"", VALUE:""};   
    this.dynamicArray.push(this.newDynamic);  
    console.log(this.dynamicArray);  
    return true;  
  }

  deleteRow(index) {  
    if(this.dynamicArray.length ==1) {  
      //this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
        return false;  
    } else {  
        this.dynamicArray.splice(index, 1);  
        //this.toastr.warning('Row deleted successfully', 'Delete row');  
        return true;  
    }  
} 

}
