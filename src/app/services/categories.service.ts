import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Categorie } from '../classes/categorie';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  public http = inject(HttpClient);
  private url = "http://localhost:3001/api/categories";
  //return depuis backend: tableau de type objet
  categories = signal<Categorie[]>([]);

  constructor() { }
  // get data format json
  getCategories() {
    //.subscribe: mise à jour de flux de données
    this.http.get<Categorie[]>(this.url).subscribe(data => (
      this.categories.set(data)
    ))
    return this.categories;
  }

  //supprimer categorie
  deleteCategorie(category: Categorie) {
    // supprimer un objet de type Categorie
    this.http.delete<Categorie>(this.url + '/' + category._id).subscribe(data => {
      return this.categories.update(categories => categories.filter(t => t._id !== category._id));
    })
  }

  createCategory(category: Categorie) {
    this.http.post(this.url, category).subscribe(
      (data: any) => {
        this.categories.set([...this.categories(), category]);
      }
    );
  }


  updateCategory(category: Categorie) {
    this.http.put(this.url + '/' + category._id, category)
      .subscribe(data => {
        return this.categories.update(categories => {
          const index = categories.findIndex(t => t._id === category._id);
          categories[index] = category;
          return categories;
        });
      })
  }
  //data: response json de request
  findCategory(_id: object | undefined) {
    return this.http.get(this.url + '/' + _id)
  }
}
