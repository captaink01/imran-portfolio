import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  type: string;
  status: string;
  github?: string;
  live?: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  filter = 'All';
  filters = ['All', 'Web', 'Mobile', 'API'];

  projects: Project[] = [
    {
      id: 1,
      title: 'Task Manager App',
      description: 'A full-stack task management application with user authentication, CRUD operations, and real-time updates. Built with React.js frontend and Node.js/Express backend with REST APIs.',
      tags: ['React.js', 'Node.js', 'Express.js', 'REST API'],
      type: 'Web',
      status: 'Completed',
      github: 'https://github.com/captaink01',
      highlight: true,
    },
    {
      id: 2,
      title: 'Mobile Shopping Cart',
      description: 'A cross-platform React Native e-commerce mobile app featuring product listing, cart management, and a clean checkout flow for both iOS and Android.',
      tags: ['React Native', 'JavaScript', 'Mobile'],
      type: 'Mobile',
      status: 'Completed',
      github: 'https://github.com/captaink01',
    },
    {
      id: 3,
      title: 'REST API Service',
      description: 'A RESTful backend service for a blog platform with JWT authentication, role-based access control, and full CRUD for posts and comments.',
      tags: ['Node.js', 'Express.js', 'REST API', 'JWT'],
      type: 'API',
      status: 'Completed',
      github: 'https://github.com/captaink01',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'This very portfolio — built with Angular 18 featuring lazy routing, responsive design, and modern component architecture. Deployed to GitHub Pages.',
      tags: ['Angular', 'TypeScript', 'SCSS'],
      type: 'Web',
      status: 'Live',
      github: 'https://github.com/captaink01',
      live: 'https://captaink01.github.io',
      highlight: true,
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that consumes a public weather API, displays 5-day forecasts, and lets users search cities with clean data visualisation.',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'REST API'],
      type: 'Web',
      status: 'Completed',
      github: 'https://github.com/captaink01',
    },
    {
      id: 6,
      title: 'Notes Mobile App',
      description: 'A minimalist note-taking React Native app with local storage persistence, categories, and search — available on Android.',
      tags: ['React Native', 'AsyncStorage', 'Mobile'],
      type: 'Mobile',
      status: 'Completed',
      github: 'https://github.com/captaink01',
    },
  ];

  get filtered(): Project[] {
    if (this.filter === 'All') return this.projects;
    return this.projects.filter(p => p.type === this.filter);
  }

  setFilter(f: string) { this.filter = f; }
}
