import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-reason',
  standalone: true,
  imports: [AngularSvgIconModule,CommonModule],
  templateUrl: './reason.component.html',
  styleUrl: './reason.component.scss'
})
export class ReasonComponent {
  activeAccordion: number = 0;
  
  aboutItems = [
    {
      title: 'Knowledge Exchange and Networking Opportunities',
      content: 'ATAWAS provides a unique platform for water supply organizations, professionals, and stakeholders in Tanzania to exchange experiences and best practices. As a member, you gain access to a network of industry experts, fostering collaboration and the exchange of innovative ideas.'
    },
    {
      title: 'Participation in Visionary Initiatives',
      content: 'WAS aligns you with a visionary organization committed to becoming a world-class association promoting best practices in the water sector. As a member, you actively contribute to shaping the future of the water industry on both a national and global scale.'
    },
    {
      title: 'Involvement in High-Level Dialogues and Forums',
      content: 'As a member, you have the unique privilege of participating in the Stakeholders Dialogue, a pivotal platform for engaging in high-level discussions addressing emerging issues within the water and sanitation sector. This involvement empowers you to actively contribute to policy changes and decisions that positively impact the sector.'
    },
    {
      title: 'Professional Development and Training',
      content: 'ATAWAS is dedicated to nurturing the growth of individuals working in the water sector. By becoming a member, you gain exclusive access to opportunities for learning, training, and skill enhancement. This investment in professional development empowers you to excel in your role and contribute to the sector’s advancement.'
    }
  ];

  toggleAccordion(index: number) {
    if (this.activeAccordion === index) {
      this.activeAccordion = -1;
    } else {
      this.activeAccordion = index;
    }
  }

}
