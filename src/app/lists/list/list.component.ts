import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

type Task = {
  id: number, 
  task: string, 
  rank: number, 
  status: string,
}

export type List = {
  id: number, 
  name: string, 
  tasks: Task[],
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatIconModule],
  template: `
  <div class="list">
    <div class="list-header">
      <h2>
        <span>{{list.name}}</span>
      </h2>
      <mat-icon aria-hidden="false" aria-label="Add" fontIcon="add_circle" (click)="addTask()"></mat-icon>
    </div>
    <ol>
      @for (task of list.tasks; track task.id) {
        <li><input class="checkboxList" type="checkbox" (click)="changeStatus(task.id, task.status)"><span>{{task.task}}</span></li>
      }
    </ol>
    </div> 
  `,
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() list: List = {
    "id": 0,
    "name": "Unamed list", 
    "tasks": [ 
        {
            "id": 0, 
            "task": "No tasks yet", 
            "rank": 0, 
            "status": "toDo"
        }
    ]
  };

  addTask () {
    console.log(this.list)

    this.list.tasks = [...this.list.tasks, {id: 2, task: 'read', rank: 2, status: 'todo'}]
  }

  changeStatus(id: number, status: string) {
    console.log(`works: ${id} ${status}`)
  }

  
}
