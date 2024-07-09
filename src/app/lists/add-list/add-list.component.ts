import { Component, Input } from '@angular/core';
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
  @Input() lists: List[] = [
      {
      "id": 0,
      "name": "Unamed list", 
      "tasks": [ 
          {
              "id": 0, 
              "task": "No tasks yet", 
              "rank": 0, 
              "status": 1
          }
        ]
      }
    ]; 
  
  addList() {
    this.lists.push(
      {
        "id": 0,
        "name": "New list", 
        "tasks": [ 
            {
                "id": 0, 
                "task": "No tasks yet", 
                "rank": 0, 
                "status": 1
            }
          ]
        }
    )
  }
}
