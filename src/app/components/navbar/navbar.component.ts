import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, inject, OnDestroy, OnInit, signal, ViewChild, ViewEncapsulation, WritableSignal } from '@angular/core';
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
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly NAVBAR_DEFAULT_HEIGHT = 80;

  breakpointObserver = inject(BreakpointObserver);

  /** Displays the overlay menu button */
  useOverlayMenu: boolean = false;

  /** Displays the overlay menu */
  showOverlayMenu: boolean = false;
  
  height: WritableSignal<number> = signal(this.NAVBAR_DEFAULT_HEIGHT);

  /** The height of the navbar element */
  navbarHeight: number = this.NAVBAR_DEFAULT_HEIGHT;

  @ViewChild('homeLink') homeLink?: ElementRef;

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

  ngAfterViewInit(): void {
    this.observeHeaderHeight();
  }

  ngOnDestroy(): void {
    this.resetStates();
  }

  observeHeaderHeight(): void {
    const resizeObserver = new ResizeObserver((entries) => {
      const e = entries[0];

      const headerHeight = e.contentRect.height;
      this.height.set(
        headerHeight < this.NAVBAR_DEFAULT_HEIGHT 
          ? this.NAVBAR_DEFAULT_HEIGHT 
          : headerHeight
      );
      
    });
    
    resizeObserver.observe(this.homeLink?.nativeElement);
  }

  getNavbarHeight(): number {
    if (!this.homeLink) return this.NAVBAR_DEFAULT_HEIGHT;

    const height = this.homeLink.nativeElement;
    console.log(height);
    
    return 70;
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
