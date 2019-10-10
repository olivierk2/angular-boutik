import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersoService {

  search: string;
  private searchChange: Subject<string> = new Subject<string>();
  
  constructor() { }

  setSearch(value: string) {
      this.search = value;
  }

  
}
