import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="app-container">
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