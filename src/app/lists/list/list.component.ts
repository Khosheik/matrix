import { Component, Input, OnInit } from '@angular/core';
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
export class ListComponent implements OnInit {
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

  ngOnInit(): void {
    this.reorderTaskByRank();
  }
  
  openAddTask () {
    this.addingTask = true; 
  }

  addTask (addedTask: string) {
    const highestId = this.getHighestId();
    const highestRank = this.getHighestRank();

    this.list.tasks = [...this.list.tasks, {id: highestId + 1, task: addedTask, rank: highestRank + 1, status: TASKSTATUS.TODO}];
    this.addingTask = false;
    this.reorderTaskByRank();

    console.log(this.list.tasks)
  }

  changeStatus(status: TASKSTATUS) {
    status === 0 ? status = TASKSTATUS.DONE : status = TASKSTATUS.TODO;
  }

  getHighestId () {
    let highestId = 0;

    for (let task of this.list.tasks) {
      if (task.id > highestId) {
        highestId = task.id;
      }
    };

    return highestId;
  }

  getHighestRank () {
    let highestRank = 0;

    for (let task of this.list.tasks) {
      if (task.rank > highestRank) {
        highestRank = task.rank;
      }
    };

    return highestRank;
  }

  reorderTaskByRank () {
    this.list.tasks.sort((a,b)=> b.rank-a.rank);
  }
  
}
