import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ObjectivesComponent } from '../../components/objectives/objectives.component';
import { LazyloadDirective } from '../../directives/lazyload.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent,ObjectivesComponent,LazyloadDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
