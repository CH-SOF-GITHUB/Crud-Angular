import { Component, inject, signal } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { Categorie } from '../../../classes/categorie';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutcateg',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajoutcateg.component.html',
  styleUrl: './ajoutcateg.component.css'
})
export class AjoutcategComponent {
  serv = inject(CategoriesService);

  //router: Router: => inject / constructor()
  /* ngOnInit() {
    this.addNewCategory();
  } */

  ajoutReussi: boolean = false;

  categorie = signal({
    nomcategorie: "",
    imagecategorie: ""
  })

  constructor(private route: Router) {

  }
  //create new category
  addNewCategory() {
    if (this.categorie().nomcategorie == null || this.categorie().nomcategorie.trim() === '') {
      alert("Valeur nom catégorie incorrecte");
      this.ajoutReussi = false;
      return;
    } else if (this.categorie().imagecategorie == null || this.categorie().imagecategorie.trim() === '') {
      alert("Valeur image catégorie incorrecte");
      this.ajoutReussi = false;
      return;
    } else {
      this.serv.createCategory(this.categorie());
      this.route.navigate(["/list_categories"])
      this.ajoutReussi = true;
    }
  }


  annulerSubmit() {
    this.route.navigate(["/list_categories"])
  }
}
