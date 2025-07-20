import { Routes } from '@angular/router';
import { Recipes } from './pages/recipes/recipes';
import { Home } from './pages/home/home';
import { Courses } from './pages/courses/courses';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: 'home', component: Home },
  {path: 'recipes', component: Recipes},
  {path: 'courses', component: Courses},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFound},
];