import { Routes } from '@angular/router';
import { ListarticlesComponent } from './components/articles/listarticles/listarticles.component';
import { AjoutarticleComponent } from './components/articles/ajoutarticle/ajoutarticle.component';
import { ModifarticleComponent } from './components/articles/modifarticle/modifarticle.component';
import { ListcategoriesComponent } from './components/categories/listcategories/listcategories.component';
import { AjoutcategComponent } from './components/categories/ajoutcateg/ajoutcateg.component';
import { ModifcategComponent } from './components/categories/modifcateg/modifcateg.component';
import { ListscategoriesComponent } from './components/scategories/listscategories/listscategories.component';
import { AjoutscategComponent } from './components/scategories/ajoutscateg/ajoutscateg.component';
import { ModifscategComponent } from './components/scategories/modifscateg/modifscateg.component';

export const routes: Routes = [
    //path article
    { path: "list_articles", component: ListarticlesComponent },
    { path: "ajouter_article", component: AjoutarticleComponent },
    { path: "modifier_article/:id", component: ModifarticleComponent },
    // path categorie
    { path: "list_categories", component: ListcategoriesComponent },
    { path: "ajouter_categorie", component: AjoutcategComponent },
    { path: "modifier_categorie/:id", component: ModifcategComponent },
    // path sous_categorie
    { path: "list_sous_categories", component: ListscategoriesComponent },
    { path: "ajouter_sous_categorie", component: AjoutscategComponent },
    { path: "modifier_sous_categorie/:id", component: ModifscategComponent }
];
