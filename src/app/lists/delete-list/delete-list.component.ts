import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { List, defaultList } from '../list/list.component';

@Component({
  selector: 'app-delete-list',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <mat-icon aria-hidden="false" aria-label="Delete a list" fontIcon="delete" (click)="deleteList()"></mat-icon>
  `,
  styleUrl: './delete-list.component.scss'
})
export class DeleteListComponent {
  @Input() list: List = defaultList;
  @Input() lists: List[] = [defaultList]

  deleteList() {
    this.list.displayed = 0;

    let updatedList: any[] = []
    this.lists.map((list) => {
      if(list.displayed === 1) {
        updatedList.push(list)
      }
    })
  }
}
