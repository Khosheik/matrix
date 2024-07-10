import { Injectable } from '@angular/core';
import data from '../lists.json';
import type { List } from '../list/list.component' 

@Injectable({
  providedIn: 'root'
})
export class DataService {
  lists: List[] = data;

  constructor() { }
}
