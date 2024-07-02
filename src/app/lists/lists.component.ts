import { Component, input } from '@angular/core';
import { ListComponent } from './list/list.component';
import data from './lists.json'
import type { List } from './list/list.component' 

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [ListComponent],
  template: `
  @for (list of lists; track list.id){
    <app-list [list]="list" />
  }

  `,
  styleUrl: './lists.component.scss'
})
export class ListsComponent {
  lists: List[] = data;
}
