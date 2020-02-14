import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute, ExtraOptions } from '@angular/router';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleDetailComponent } from './vehicles/vehicle-detail/vehicle-detail.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerdetailComponent } from './customers/customerdetail/customerdetail.component';

const routes: Routes = [
  { path: 'clients', pathMatch: 'full', component: CustomersComponent },
  { path: 'customerdetail', pathMatch: 'full', component: CustomerdetailComponent },
  { path: 'vehicles', pathMatch: 'full', component: VehiclesComponent },
  { path: 'vehicledetail', pathMatch: 'full', component: VehicleDetailComponent }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
