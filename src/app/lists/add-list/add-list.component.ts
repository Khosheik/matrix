import { Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import type { List } from '../list/list.component';

@Component({
  selector: 'app-add-list',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="add-list">
      <button (click)="addList()">
        <mat-icon aria-hidden="false" aria-label="Add a task" fontIcon="add_circle"></mat-icon> 
        <span>Add a list</span>
      </button>
    </div>`,
  styleUrl: './add-list.component.scss'
})
export class AddListComponent {
  defaultList = {
    "id": 3,
    "name": "New list", 
    "tasks": [ 
        {
            "id": 0, 
            "task": 'Add a task', 
            "rank": 0, 
            "status": 0
        }
      ], 
    "displayed": 1,
    }; 

  @Input() lists: List[] = [this.defaultList]; 
  
  addList() {
    let highestListId = this.getHighestListId() 
    let newList = {
      ...this.defaultList, 
      "id": highestListId + 1,
    }
    this.lists.push(newList);
  }

  getHighestListId() {
    let highestListId = 0;

    for (let list of this.lists) {
      if (list.id > highestListId) {
        highestListId = list.id;
      }
    };

    return highestListId;
  }
}
