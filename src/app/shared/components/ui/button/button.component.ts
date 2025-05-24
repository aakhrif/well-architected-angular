// button.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

export type ButtonStyle = 'default' | 'primary' | 'secondary' | 'warn' | 'success';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'text' | 'warn' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() icon = '';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() ariaLabel = '';
  @Output() onClick = new EventEmitter<MouseEvent>();

  get color(): string {
    switch (this.variant) {
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'accent';
      case 'warn':
        return 'warn';
      default:
        return '';
    }
  }

  // In button.component.ts
  get buttonClass(): string {
    return `${this.variant} ${this.size}`;
  }
}