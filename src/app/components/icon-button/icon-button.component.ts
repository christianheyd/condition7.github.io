import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { IconSizeDirective } from '../../directives/icon-size.directive';

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [
    MatIcon,
    IconSizeDirective,
  ],
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
  @Input() icon: string = '';

  @Input() label: string = '';

  @Input() size?: string | undefined;

  @Output() wasClicked = new EventEmitter<void>();

  handleClick(): void {
    this.wasClicked.emit();
  }
}
