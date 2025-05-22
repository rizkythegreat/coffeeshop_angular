import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent
  ],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main>
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