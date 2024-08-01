import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/contact/header/header.component';
import { ContactContentComponent } from '../../components/contact/contact-content/contact-content.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent,ContactContentComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
