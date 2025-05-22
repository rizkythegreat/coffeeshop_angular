import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { MenuComponent } from './components/menu/menu.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    MenuComponent,
    GalleryComponent
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-about></app-about>
        <app-menu></app-menu>
        <app-gallery></app-gallery>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      overflow-x: hidden;
    }
    
    main {
      overflow-x: hidden;
    }
  `]
})
export class AppComponent {
  title = 'Brew & Bygone - Retro Coffee Shop';
}