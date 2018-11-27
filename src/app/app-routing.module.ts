import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { OnlyLoggedInGuard } from './modules/auth/services/only-logged-in.guard';
import { OnlyGuestGuard } from './modules/auth/services/only-guest.guard';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    canActivate: [OnlyGuestGuard]
  },
  {
    path: 'dashboard',
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    canLoad: [OnlyLoggedInGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
