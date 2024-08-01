import { Component, HostListener, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,FooterComponent,AngularSvgIconModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   isScrolled:boolean = false
  scrollProgress = 0;
  @HostListener('window:scroll')
 
  onscroll(): void {
    const scrollY = window.scrollY;
    if (scrollY > 0) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
    this.scrollProgress =
      (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) *
      100;
  }

  backToTheTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
