import { Component, Input } from '@angular/core';
import { BaseModalComponent } from '../base-modal/base-modal.component';

@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent extends BaseModalComponent {
  @Input() errorTitle!: string;
  @Input() errorMessage!: string;
  
  constructor() {
    super();
  }
}
