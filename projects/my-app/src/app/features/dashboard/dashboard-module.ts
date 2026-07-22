import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard';
import { RouterModule, Routes } from '@angular/router';
import { MyCard } from 'shared-lib';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const routes: Routes = [
  {path: '', component: DashboardComponent}
];


@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MyCard, FontAwesomeModule],  
  exports: [DashboardComponent]
})
export class DashboardModule {}
