import { Component, Input } from '@angular/core';

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
  imports: [],
  template: `
    {{list.name}}
    <ol>
      @for (task of list.tasks; track task.id) {
        <li><input type="checkbox"><span>{{task.task}}</span></li>
      }
    </ol>
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
