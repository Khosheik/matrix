import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';
import { AddListComponent } from './add-list/add-list.component';
import { DataService } from './service/data.service';

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
  lists = this.dataService.lists;

  constructor(private dataService: DataService) {}
}
