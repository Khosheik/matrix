import { Component, input } from '@angular/core';
import { ListComponent } from './list/list.component';
import data from './lists.json'
import type { List } from './list/list.component' 
import { AddListComponent } from './add-list/add-list.component';

@Component({
  selector: 'app-lists',
  standalone: true,
  imports: [ListComponent, AddListComponent],
  template: `<div class="lists">
    @for (list of lists; track list.id){
      <app-list [list]="list" [lists]="lists"/>
    }
    <app-add-list [lists]=lists />
  </div>
  `,
  styleUrl: './lists.component.scss'
})
export class ListsComponent {
  lists: List[] = data;
}
