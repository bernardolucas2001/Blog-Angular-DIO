import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';
import { MenuTitleComponent } from './componentes/menu-title/menu-title.component';
import { BigCardComponent } from './componentes/big-card/big-card.component';
import { SmallCardComponent } from './componentes/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,MenuBarComponent,MenuTitleComponent,BigCardComponent,SmallCardComponent,HomeComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog-angular';
}
