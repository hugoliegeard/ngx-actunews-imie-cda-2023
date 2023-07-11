import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/pages/home/home.component";
import {CategoriesComponent} from "./modules/pages/categories/categories.component";
import {ArticleComponent} from "./modules/pages/article/article.component";
import {Error404Component} from "./modules/pages/error404/error404.component";
import {RegisterComponent} from "./modules/pages/register/register.component";
import {LoginComponent} from "./modules/pages/login/login.component";

const routes: Routes = [
  {
    // http://localhost:4200
    path: '',
    component: HomeComponent
  },
  {
    path: 'inscription',
    component: RegisterComponent
  },
  {
    path: 'connexion',
    component: LoginComponent
  },
  {
    // http://localhost:4200/politique
    // http://localhost:4200/economie
    // http://localhost:4200/culture
    // http://localhost:4200/sports
    // http://localhost:4200/loisirs
    // http://localhost:4200/etc...
    path: ':category',
    component: CategoriesComponent
  },
  {
    // http://localhost:4200/politique/slug-de-mon-article
    path: 'page/404',
    component: Error404Component
  },
  {
    // http://localhost:4200/politique/slug-de-mon-article
    path: ':category/:article',
    component: ArticleComponent
  },
  {
    path: '**',
    redirectTo: 'page/404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
