import { Component, input, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ListHeaderComponent } from './list-header/list-header.component';
import { DataService } from '../service/data.service';

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
  //useful only because we don't have a DB
  displayed: DISPLAYEDLIST,
}

export enum TASKSTATUS {
  DONE = 1, 
  TODO = 0, 
}

enum DISPLAYEDLIST {
  YES = 1, 
  NO = 0,
}

export const defaultList = {
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

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatIconModule, ListHeaderComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit {
  addingTask = false;
  @Input() list: List = defaultList;
  lists: List[] = this.dataService.lists; 

  constructor(private dataService: DataService) {}
  
  ngOnInit(): void {
    this.reorderTaskByRank();
  };

  addTask (addedTask: string) {
    const highestId = this.getHighestOfKey('id');
    const highestRank = this.getHighestOfKey('rank');

    this.list.tasks = [...this.list.tasks, {id: highestId + 1, task: addedTask, rank: highestRank + 1, status: TASKSTATUS.TODO}];
    this.addingTask = false;
    this.reorderTaskByRank();
  };

  validateInput(value: string) {
    if(value !== '') {
      this.addTask(value);
    };
    
  }

  deleteTask(deletedTaskId: number) {
    this.list.tasks = this.list.tasks.filter((task) => task.id !== deletedTaskId)
  };

  changeStatus(status: TASKSTATUS) {
    status === 0 ? status = TASKSTATUS.DONE : status = TASKSTATUS.TODO;
  };

  getHighestOfKey(key: keyof Task) {
    let highest = 0;
    
    for (let task of this.list.tasks) {
      let taskItemValue = task[key];
      if (typeof taskItemValue === 'number') {
        if (taskItemValue > highest) {
          highest = taskItemValue;
        }
      }
    };

    return highest;
  };

  reorderTaskByRank () {
    this.list.tasks.sort((a,b)=> b.rank-a.rank);
  };
  
  
}
