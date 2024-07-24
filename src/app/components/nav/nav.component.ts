import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule,AngularSvgIconModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  showMenu: boolean = false;
  isScrolled: boolean = false;
  scrollProgress = 0;
}
