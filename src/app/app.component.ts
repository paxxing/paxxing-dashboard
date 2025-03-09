import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

  protected drawerIsOpen = signal(false);

  protected toggleDrawer() {
    console.log('hi');
    this.drawerIsOpen.set(!this.drawerIsOpen());
  }
}
