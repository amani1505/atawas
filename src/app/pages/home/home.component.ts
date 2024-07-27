import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ObjectivesComponent } from '../../components/objectives/objectives.component';
import { LazyloadDirective } from '../../directives/lazyload.directive';
import { MissionComponent } from '../../components/mission/mission.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ObjectivesComponent,
    LazyloadDirective,
    MissionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
