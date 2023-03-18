
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlarmComponent } from '../alarm/alarm.component';


const routes: Routes = [
  { path: 'alarm',
  children: [
    {
      path: '1',
      component: AlarmComponent
    },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutingModule { }
