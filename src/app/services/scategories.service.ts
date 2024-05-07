import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Scategorie } from '../classes/scategorie';

@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {
  private url = "http://localhost:3001/api/scategories"
  public http = inject(HttpClient)
  scategories = signal<Scategorie[]>([]);

  constructor() { }
  // get 
  getScategories() {
    this.http.get<Scategorie[]>(this.url).subscribe(data => {
      this.scategories.set(data);
    })

    return this.scategories();
  }
}
