import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  formData = { name: '', email: '', subject: '', message: '' };
  submitted = false;
  sending = false;

  contacts = [
    {
      icon: 'email',
      label: 'Email',
      value: 'mzimran7@gmail.com',
      href: 'mailto:mzimran7@gmail.com'
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '08153526932',
      href: 'tel:08153526932'
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: 'github.com/captaink01',
      href: 'https://github.com/captaink01'
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/imranhamza',
      href: 'https://www.linkedin.com/in/imranhamza'
    },
  ];

  onSubmit() {
    this.sending = true;
    setTimeout(() => {
      this.sending = false;
      this.submitted = true;
      this.formData = { name: '', email: '', subject: '', message: '' };
    }, 1500);
  }

  reset() { this.submitted = false; }
}
