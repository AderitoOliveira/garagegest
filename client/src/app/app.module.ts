import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { ModalModule } from './_modal';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerdetailComponent } from './customers/customerdetail/customerdetail.component';

import { GlobalCommunicationService } from './globalcommunicationservice';
import { FilterPipe } from '../app/util/pipemodule';
import { VehicleDetailComponent } from './vehicles/vehicle-detail/vehicle-detail.component';
import { VehicleRepairDetailComponent } from './vehicles/vehicle-repair-detail/vehicle-repair-detail.component';
import { VehicleRepairComponent } from './vehicles/vehicle-repair/vehicle-repair.component';


@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    CustomersComponent,
    CustomerdetailComponent,
    FilterPipe,
    VehicleDetailComponent,
    VehicleRepairDetailComponent,
    VehicleRepairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    CommonModule,
    ModalModule,
    NgbModule
  ],
  providers: [GlobalCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
