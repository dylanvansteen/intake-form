import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './login.html'
})
export class LoginComponent {
  form: FormGroup;
  $isSigninIn: Observable<boolean>;
  $errorMessage: Observable<string>;

  constructor(private formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      email: ['dylanvansteen@gmail.com', [Validators.email]],
      password: ['Welkom01', [Validators.min(6)]]
    });

    // this.$isSigninIn = this.store.select(state => state.loginPage.signinIn);
    // this.$errorMessage = this.store.select(state => state.loginPage.errorMessage);
  }

  submit() {
    if (this.form.valid) {
      // this.store.dispatch(new SubmitFormAction(this.form.value));
    }
  }
}
