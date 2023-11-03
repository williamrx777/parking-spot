import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReserveComponent } from './components/reserve/reserve.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'reserve',
    component:ReserveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
