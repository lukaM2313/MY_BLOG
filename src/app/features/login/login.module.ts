import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { RegisterModalComponent } from './components/register-modal/register-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';




@NgModule({
  declarations: [
    LoginComponent,
    LoginModalComponent,
    RegisterModalComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginModule { }
