import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {
  }

  doSubmit() {
    console.log('Submit', this.authForm.getRawValue(), this.authForm);
    // this.onSubmit.emit(this.authForm.getRawValue());
  }

}
