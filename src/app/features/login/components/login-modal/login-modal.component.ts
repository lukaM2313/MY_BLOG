import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/core/services/api/api.service';
import { IAdmin } from 'src/app/interfaces/IUser';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['../../login.component.scss']
})
export class LoginModalComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isPasswordVisible: boolean = false;
  creadentialsInvalid: boolean = false;

  formSubmitted: boolean = false;
  usernameInvalid: boolean = false;
  passwordInvalid: boolean = false;

  querySubscription!: Subscription;

  @Output() switchModal: EventEmitter<void> = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private apiService: ApiService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.subscribe((queryParams) => {
      if(queryParams['error'] === 'incorrect-credentials') {
        this.creadentialsInvalid = true;
      }
    })
  }

  ngOnDestroy(): void {
    if(this.querySubscription) this.querySubscription.unsubscribe();
  }

  onSubmit() {
    
    if (this.loginForm.valid) {
      this.usernameInvalid = false;
      this.passwordInvalid = false;

      const userData: IAdmin = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password
      }
      this.apiService.loginAsAdmin(userData);

    } else {
      if (this.loginForm.controls['username'].hasError('required')) {
        this.usernameInvalid = true;
      }
      if (this.loginForm.controls['password'].hasError('required')) {
        this.passwordInvalid = true;
      }
    }
  }

  changePasswordType() {
    this.isPasswordVisible = !this.isPasswordVisible;
    console.log(this.isPasswordVisible);
  }

  onSwitch() {
    this.switchModal.emit();
  } 

}
