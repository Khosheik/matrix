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
    <h2>
      <mat-icon aria-hidden="false" aria-label="Example home icon" fontIcon="task_alt"></mat-icon>
      <span>{{list.name}}</span>
    </h2>
    <ol>
      @for (task of list.tasks; track task.id) {
        <li><input class="checkboxList" type="checkbox"><span>{{task.task}}</span></li>
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
  
}
