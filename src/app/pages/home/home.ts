import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  skills = ['React.js', 'Node.js', 'TypeScript', 'React Native', 'Express.js', 'REST APIs', 'Git/GitHub', 'HTML5', 'CSS3', 'JavaScript'];
}
