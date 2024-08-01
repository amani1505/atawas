import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, AngularSvgIconModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  showMenu: boolean = false;
  @Input() isScrolled: boolean = false;
  scrollProgress = 0;
}
