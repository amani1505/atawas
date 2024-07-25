import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule,AngularSvgIconModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit {
  @ViewChildren('sliderContainer') sliderContainers!: QueryList<ElementRef>;
  currentSlidePos = 0;

  slides = [
    { imageUrl: 'assets/images/hero-slide-1.jpg' },
    { imageUrl: 'assets/images/hero-slide-2.jpg' },
    { imageUrl: 'assets/images/hero-slide-3.jpg' },
    { imageUrl: 'assets/images/hero-slide-4.jpg' },
    { imageUrl: 'assets/images/hero-slide-5.jpg' },
    { imageUrl: 'assets/images/hero-slide-6.jpg' },
    { imageUrl: 'assets/images/hero-slide-7.jpg' },
    { imageUrl: 'assets/images/hero-slide-8.jpg' },
    { imageUrl: 'assets/images/hero-slide-9.jpg' },
  ];

  ngOnInit() {}

  ngAfterViewInit() {
    this.initSlider();
    this.moveSliderItem(); // Ensure initial slide is displayed
    setInterval(() => {
      this.slideNext();
    }, 3000); // Autoplay functionality
  }

  initSlider() {
    this.sliderContainers.forEach(sliderContainer => {
      const sldierContainer = sliderContainer.nativeElement.querySelector('.slider-container');
      const sliderPrevBtn = sliderContainer.nativeElement.querySelector('.slider-btn.prev');
      const sliderNextBtn = sliderContainer.nativeElement.querySelector('.slider-btn.next');

      sliderNextBtn.addEventListener('click', () => this.slideNext());
      sliderPrevBtn.addEventListener('click', () => this.slidePrev());
    });
  }

  slideNext() {
    this.currentSlidePos = (this.currentSlidePos + 1) % this.slides.length;
    this.moveSliderItem();
  }

  slidePrev() {
    this.currentSlidePos = (this.currentSlidePos - 1 + this.slides.length) % this.slides.length;
    this.moveSliderItem();
  }

  moveSliderItem() {
    this.sliderContainers.forEach(sliderContainer => {
      const sldierContainer = sliderContainer.nativeElement.querySelector('.slider-container');
      sldierContainer.style.transform = `translateX(-${sldierContainer.children[this.currentSlidePos].offsetLeft}px)`;
    });
  }


}
