import { Component, afterNextRender } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncComponentComponent } from './components/async-component/async-component.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncComponentComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    afterNextRender(() => {
      console.log(window.location.pathname);
    });
  }
}
