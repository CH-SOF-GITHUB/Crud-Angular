import { Component, inject, signal } from '@angular/core';
import { ScategoriesService } from '../../../services/scategories.service';
import { Scategorie } from '../../../classes/scategorie';

@Component({
  selector: 'app-listscategories',
  standalone: true,
  imports: [],
  templateUrl: './listscategories.component.html',
  styleUrl: './listscategories.component.css'
})
export class ListscategoriesComponent {
  // appel service
  serv = inject(ScategoriesService);
  scategtab = signal<Scategorie[]>([]);
  //
  ngOnInit() {
    this.loadcategories();
    //console.log(this.categtab());
  }
  //
  loadcategories() {
    //this.scategtab = this.serv.getScategories();
  }

}
