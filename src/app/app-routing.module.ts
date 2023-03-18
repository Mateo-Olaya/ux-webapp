import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlarmComponent } from './alarm/alarm.component';

const routes: Routes = [
  { path:'home', component: HomeComponent },
  { path:'alarm', component: AlarmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
