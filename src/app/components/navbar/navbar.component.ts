import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { 
  RouterLink, 
  RouterLinkActive 
} from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { IconButtonComponent } from '../icon-button/icon-button.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    IconButtonComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  breakpointObserver = inject(BreakpointObserver);

  /** Displays the overlay menu button */
  useOverlayMenu: boolean = false;

  /** Displays the overlay menu */
  showOverlayMenu: boolean = false;

  /** The links in the navbar and their page URLs. */
  public navItems: Array<{
    name: string,
    url: string,
  }> = [
    // { name: 'Home', url: '/home' },
    { name: 'Original Art', url: '/originals' },
    { name: 'Portraits', url: '/portraits' },
    { name: 'Workshops', url: '/workshops' },
    { name: 'Commissions', url: '/commissions' },
  ];

  ngOnInit(): void {
    this.breakpointObserver.observe([
        Breakpoints.Small,
        Breakpoints.XSmall,
      ]
      ).subscribe((breakpoint) => {
        this.useOverlayMenu = breakpoint.matches;
        if (!this.useOverlayMenu) {
          this.showOverlayMenu = false;
        }
      });
  }

  ngOnDestroy(): void {
    this.resetStates();
  }

  resetStates(): void {
    this.useOverlayMenu = false;
    this.showOverlayMenu = false;
  }

  openOverlayMenu(): void {
    this.showOverlayMenu = true;
  }

  closeOverlayMenu(): void {
    this.showOverlayMenu = false;
  }
}
