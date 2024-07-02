import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListsComponent } from './lists/lists.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListsComponent],
  template: `<app-lists />`,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'matrix';
}; 
