import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  skills = {
    'Frontend': ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Design'],
    'Backend': ['Node.js', 'Express.js', 'REST API Development'],
    'Mobile': ['React Native'],
    'Tools': ['Git', 'GitHub', 'WPS Office', 'Microsoft Office']
  };

  timeline = [
    { year: '2021–2026', title: 'B.Sc. Software Engineering', org: 'Bayero University Kano', type: 'edu' },
    { year: '2024–2025', title: 'Software Intern', org: 'Comsoft Limited, Abuja', type: 'work' },
    { year: '2018–2019', title: 'Electrical Fitter', org: 'National Power Training Institute of Nigeria', type: 'work' },
    { year: '2015–2018', title: 'WASSCE', org: 'Model Secondary School, Maitama', type: 'edu' },
  ];

  skillKeys(): string[] {
    return Object.keys(this.skills);
  }
  skillValues(key: string): string[] {
    return (this.skills as any)[key];
  }
}
