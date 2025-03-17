import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { LucideAngularModule, Menu, Ellipsis } from 'lucide-angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly MenuIcon = Menu;
  readonly EllipsisIcon = Ellipsis;

  title = 'paxxing-dashboard';

  constructor(private oidcSecurityService: OidcSecurityService) {}

  protected drawerIsOpen = signal(false);

  protected toggleDrawer() {
    console.log('hi');
    this.drawerIsOpen.set(!this.drawerIsOpen());
  }

  ngOnInit() {
    this.oidcSecurityService
      .checkAuth()
      .subscribe(({ isAuthenticated, userData }) => {
        console.log('인증 상태:', isAuthenticated);
        console.log('사용자 데이터:', userData);
      });
  }
}
