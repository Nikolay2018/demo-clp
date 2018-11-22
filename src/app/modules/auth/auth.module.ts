import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatIconRegistry, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [AuthFormComponent, AuthContainerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [AuthContainerComponent]
})
export class AuthModule {
  constructor(
    public matIconRegistry: MatIconRegistry
  ) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
