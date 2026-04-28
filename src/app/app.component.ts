import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  icon: string;
  url: string;
  className: string;
}

interface ProjectItem {
  title: string;
  image: string;
  category: 'web' | 'mobile';
  url: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App {
  activeTab: 'web' | 'mobile' = 'web';

  socialLinks: SocialLink[] = [
    {
      name: 'WhatsApp',
      icon: 'bi bi-whatsapp',
      url: 'https://wa.me/529961080106',
      className: 'whatsapp'
    },
    {
      name: 'Facebook',
      icon: 'bi bi-facebook',
      url: 'https://www.facebook.com/share/14WSKcJbu2G/',
      className: 'facebook'
    },
    {
      name: 'Instagram',
      icon: 'bi bi-instagram',
      url: 'https://www.instagram.com/josuemx092?igsh=MWZxeGpvM3ByMXZ0ZQ==',
      className: 'instagram'
    },
    {
      name: 'TikTok',
      icon: 'bi bi-tiktok',
      url: 'https://www.tiktok.com/@jvmdev117?_r=1&_t=ZS-94oj8aHb4XV',
      className: 'tiktok'
    },
    {
      name: 'GitHub',
      icon: 'bi bi-github',
      url: 'https://github.com/JOSUEEVM',
      className: 'github'
    }
  ];

  projects: ProjectItem[] = [
    {
      title: 'DinosPizzas',
      image: 'assets/projects/imagen1.png',
      category: 'web',
      url: 'https://josueevm.github.io/DINOSPIZZA/menu'
    },
    {
      title: 'Herbolario',
      image: 'assets/projects/imagen2.png',
      category: 'web',
      url: 'https://josueevm.github.io/Herbolario/'
    },
    {
      title: 'Creative Agency',
      image: 'assets/projects/web-3.jpg',
      category: 'web',
      url: 'https://josueevm.github.io/DINOSPIZZA/menu'
    },
    {
      title: 'App Design',
      image: 'assets/projects/mobile-1.jpg',
      category: 'mobile',
      url: 'https://josueevm.github.io/DINOSPIZZA/menu'
    },
    {
      title: 'Travel App',
      image: 'assets/projects/mobile-2.jpg',
      category: 'mobile',
      url: 'https://josueevm.github.io/DINOSPIZZA/menu'
    },
    {
      title: 'Social Media UI',
      image: 'assets/projects/mobile-3.jpg',
      category: 'mobile',
      url: 'https://josueevm.github.io/DINOSPIZZA/menu'
    }
  ];

  get filteredProjects(): ProjectItem[] {
    return this.projects.filter(project => project.category === this.activeTab);
  }

  changeTab(tab: 'web' | 'mobile'): void {
    this.activeTab = tab;
  }
}