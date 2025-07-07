import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent { 

  /** The links in the navbar and their page URLs. */
  public navItems: Array<{
    name: string,
    url: string,
  }> = [
    // { name: 'Home', url: '/home' },
    { name: 'Originals', url: '/originals' },
    { name: 'Portraits', url: '/portraits' },
    { name: 'Students', url: '/students' },
  ];
}
