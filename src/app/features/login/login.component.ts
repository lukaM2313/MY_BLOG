import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  isModalSwitched = false;


  switchModal() {
    this.isModalSwitched = !this.isModalSwitched;
    console.log(this.isModalSwitched);
  }

}
