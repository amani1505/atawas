import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-stakeholder',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './stakeholder.component.html',
  styleUrl: './stakeholder.component.scss',
})
export class StakeholderComponent {
  stakeHolders: any[] = [
    { id: 1, url: '../../../assets/images/shareholder/apex.png' },
    {
      id: 2,
      url: '../../../assets/images/shareholder/Davis_&_Shirtliff_official_logo.png',
    },
    {
      id: 3,
      url: '../../../assets/images/shareholder/future-pipe-industries-squarelogo-1442297020613.webp',
    },
    { id: 4, url: '../../../assets/images/shareholder/Itron.jpg' },
    { id: 5, url: '../../../assets/images/shareholder/jobs-211850.webp' },
    { id: 6, url: '../../../assets/images/shareholder/Logo.png' },
    { id: 7, url: '../../../assets/images/shareholder/mbeya.png' },
    { id: 8, url: '../../../assets/images/shareholder/nmb.jpeg' },
    { id: 9, url: '../../../assets/images/shareholder/Vodacom.png' },
    { id: 10, url: '../../../assets/images/shareholder/plasco-new-logo.webp' }, // Updated duplicate IDs
    { id: 11, url: '../../../assets/images/shareholder/sbs.png' },
    {
      id: 12,
      url: '../../../assets/images/shareholder/tanzania-steel-pipe.png',
    },
    { id: 13, url: '../../../assets/images/shareholder/TPSF.png' },
    { id: 14, url: '../../../assets/images/shareholder/vei.png' },
    { id: 15, url: '../../../assets/images/shareholder/water_institute.png' },
    { id: 16, url: '../../../assets/images/shareholder/water-utility.jpg' },
    { id: 17, url: '../../../assets/images/shareholder/WaterNet-logo.png' }, // Updated duplicate IDs
    { id: 18, url: '../../../assets/images/shareholder/wm-logo.png' },
    { id: 19, url: '../../../assets/images/shareholder/world-Vision.png' },
  ];

  stakeholderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true, // Enabled for better UX
    touchDrag: true, // Enabled for better UX
    pullDrag: true, // Enabled for better UX
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    autoplay: true, // Enable autoplay
    autoplayTimeout: 1000, // Time in milliseconds between autoplay transitions
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 3,
      },
      400: {
        items: 3,
      },
      740: {
        items: 6,
      },
      940: {
        items: 10,
      },
    },
    nav: false,
  };
}
