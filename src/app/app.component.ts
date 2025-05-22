import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
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