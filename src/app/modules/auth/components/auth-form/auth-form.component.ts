import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  EventEmitter,
  Injector,
  Input,
  Output
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

export interface SubmitData {
  login: string;
  password: string;
}

@Component({
  selector: 'cpl-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent {

  @Input() error: any;
  @Output() onSubmit = new EventEmitter<SubmitData>();

  authForm = this.formBuilder.group({
    username: [''],
    password: ['']
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef) {
  }

  doSubmit() {
    console.log('Submit', this.authForm.getRawValue(), this.authForm);
    // this.onSubmit.emit(this.authForm.getRawValue());
  }

  socialAuth(provider: string) {
    window.location.href = 'http://localhost:8001/auth/social/' + provider;
  }

}
