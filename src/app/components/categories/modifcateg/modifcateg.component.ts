import { Component, inject, signal } from '@angular/core';
import { CategoriesService } from '../../../services/categories.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../../../classes/categorie';


@Component({
  selector: 'app-modifcateg',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modifcateg.component.html',
  styleUrl: './modifcateg.component.css'
})
export class ModifcategComponent {
  serv = inject(CategoriesService);
  router = inject(Router);
  private route = inject(ActivatedRoute);
  catId: Object;
  //constructor
  //constructor(private router:Router, private route: Route)
  categorie = signal<Categorie>({});

  ngOnInit() {
    this.catId = this.route.snapshot.params['id'];
    this.serv.findCategory(this.catId).subscribe(data => {
      this.categorie.set(data)
    })
  }

  // update category
  toUpdate() {
    this.serv.updateCategory(this.categorie());
    this.router.navigate(["/list_categories"]);
  }
  //
  annulerSubmit() {
    this.router.navigate(["/list_categories"])
  }
}
