import { Component, Input } from '@angular/core';
import { DeleteListComponent } from '../../delete-list/delete-list.component';
import { MatIconModule } from '@angular/material/icon';
import { List } from '../list.component';

@Component({
  selector: 'app-list-header',
  standalone: true,
  imports: [ DeleteListComponent, MatIconModule ],
  template: `
    <div class="list-header">
      <div class="list-header-title" (click)="openListTitleEdition()">
        @if (editingListTitle === true) {
          <input #editTitle type="text" (keyup.enter)="updateListTitle(editTitle.value)" autofocus />
        }
        @else {
          <h2>
            <span >{{list.name}}</span>
          </h2>
        }

      </div>
      @if(editingListTitle === false) {
        <div class="list-header-actions">
          <app-delete-list [list]="list" [lists]="lists" />
        </div>
      }
    </div>
    `,
  styleUrl: './list-header.component.scss'
})
export class ListHeaderComponent {
  editingListTitle = false; 

  @Input() list!: List;
  @Input() lists!: List[];

  openListTitleEdition () {
    this.editingListTitle = true; 
  };

  updateListTitle(newTitle: string) {
    if (newTitle !== '') {
      this.list.name = newTitle;
    }
    this.editingListTitle = false;
  };
}
