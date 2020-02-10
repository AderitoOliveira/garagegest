import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';

import { MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule, MatSortModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerdetailComponent } from './customers/customerdetail/customerdetail.component';

import { GlobalCommunicationService } from './globalcommunicationservice';


@NgModule({
  declarations: [
    AppComponent,
    VehiclesComponent,
    CustomersComponent,
    CustomerdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule
    //MatFormFieldModule, 
    //MatInputModule, 
    //MatPaginatorModule, 
    //MatTableModule, 
    //MatSortModule,
    //BrowserAnimationsModule
  ],
  providers: [GlobalCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
