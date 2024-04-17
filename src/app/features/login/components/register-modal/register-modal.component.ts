import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatchValidator } from './register-modal.validator';
import { ApiService } from 'src/app/core/services/api/api.service';
import { IAdminRegistration } from 'src/app/interfaces/IUserRegistration';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['../../login.component.scss']
})
export class RegisterModalComponent {
  registerForm: FormGroup;
  isPasswordVisible: boolean = false;
  isRepeatPasswordVisible: boolean = false;
  
  usernameInvalid: boolean = false;
  passwordInvalid: boolean = false;
  emailInvalid: boolean = false;

  @Output() switchModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private apiService: ApiService) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required],
    }, {
      validators: passwordMatchValidator('password', 'repeatPassword'),
    });
  }

  changePasswordType() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  changeRepeatPasswordType() {
    this.isRepeatPasswordVisible = !this.isRepeatPasswordVisible;
  }

  onSubmit() {
    if(this.registerForm.valid) {
      const userData: IAdminRegistration = {
        username: this.registerForm.value.username,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password
      };

      this.apiService.addAmin(userData);
    } else {
      if (this.registerForm.controls['username'].hasError('required')) {
        this.usernameInvalid = true;
      }
      if (this.registerForm.controls['password'].hasError('required')) {
        this.passwordInvalid = true;
      }
      if (this.registerForm.controls['email'].hasError('required')) {
        this.emailInvalid = true;
      }
    }
  }

  onSwitch() {
    this.switchModal.emit();
  }
}
