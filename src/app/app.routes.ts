import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { AppComponent } from './app.component';
import { ViewBookingComponent } from './components/view-booking/view-booking.component';
import { UpdateBookingComponent } from './components/update-booking/update-booking.component';
import { DeleteBookingComponent } from './components/delete-booking/delete-booking.component';

export const routes: Routes = [

  { path: 'bookaroom', component: AddBookingComponent },
  { path: 'viewbooking', component: ViewBookingComponent },
  { path: 'updatebooking', component: UpdateBookingComponent },
  { path: 'deletebooking', component: DeleteBookingComponent }

  // add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouteComponent {}
