import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { AuthContainerComponent } from './containers/auth-container/auth-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatIconRegistry, MatInputModule } from '@angular/material';
import { Store, StoreModule } from '@ngrx/store';
import * as fromAuth from './state/reducers/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/effects/auth.effects';
import { CookieService } from 'ngx-cookie-service';
import { State } from '../../reducers';
import { SetToken } from './state/actions/auth.actions';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AuthFormComponent, AuthContainerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forFeature('auth', fromAuth.reducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  exports: [AuthContainerComponent],
  providers: [CookieService]
})
export class AuthModule {
  constructor(
    public store$: Store<State>,
    public matIconRegistry: MatIconRegistry,
    private cookieService: CookieService
  ) {
    matIconRegistry.registerFontClassAlias('fontawesome', 'fa');

    const token = this.cookieService.get('x-token');
    if (token) {
      this.store$.dispatch(new SetToken({ token }));
    }
  }
}
