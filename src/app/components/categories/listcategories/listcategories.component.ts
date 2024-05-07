import { Component, inject, signal } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { Categorie } from '../../../classes/categorie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listcategories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listcategories.component.html',
  styleUrl: './listcategories.component.css'
})
export class ListcategoriesComponent {
  catserv = inject(CategoriesService);
  categtab = signal<Categorie[]>([]);
  // chargement du component
  ngOnInit() {
    this.loadcategories();
    //console.log(this.categtab());
  }
  //
  loadcategories() {
    this.categtab = this.catserv.getCategories();
  }
  //
  deleteCat(category: Categorie) {
    this.catserv.deleteCategorie(category);
  }
}
