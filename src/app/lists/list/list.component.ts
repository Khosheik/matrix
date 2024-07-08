import { Component, Input } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

type Task = {
  id: number, 
  task: string, 
  rank: number, 
  status: TASKSTATUS,
}

export type List = {
  id: number, 
  name: string, 
  tasks: Task[],
}

export enum TASKSTATUS {
  DONE = 1, 
  TODO = 0, 
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './list.component.html',
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
            "status": TASKSTATUS.TODO
        }
    ]
  };

  addingTask = false; 

  openAddTask () {
    this.addingTask = true; 
  }

  addTask (addedTask: string) {
    console.log(addedTask);
    this.list.tasks = [...this.list.tasks, {id: 2, task: addedTask, rank: 2, status: TASKSTATUS.TODO}];
    this.addingTask = false;
  }

  changeStatus(status: TASKSTATUS) {
    status === 0 ? status = TASKSTATUS.DONE : status = TASKSTATUS.TODO;
  }

  
}
