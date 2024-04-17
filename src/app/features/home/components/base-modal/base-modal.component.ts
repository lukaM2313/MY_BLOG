import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss']
})

export class BaseModalComponent {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}
  
  onModalContentClick(event: Event): void {
    event.stopPropagation();
  }

  onClose() {
    this.closeModal.emit();
  }
}
