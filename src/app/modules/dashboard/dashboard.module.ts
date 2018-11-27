import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { HeaderComponent } from './containers/header/header.component';
import { MatButtonModule, MatMenuModule } from '@angular/material';

@NgModule({
  declarations: [DashboardPageComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatButtonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule {
}
