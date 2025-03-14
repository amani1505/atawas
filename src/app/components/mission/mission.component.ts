import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.scss',
})
export class MissionComponent {}
