import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';

@NgModule({
  declarations: [AuthFormComponent, AuthContainerComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [AuthContainerComponent]
})
export class AuthModule {
}
