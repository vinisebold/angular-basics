import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type NavButton = {
  label : string;
  route: string;
  iconName: string;
}

@Component({
  selector: 'app-navigation-buttons',
  imports: [RouterLink],
  templateUrl: './navigation-buttons.html',
  styleUrl: './navigation-buttons.css'
})

export class NavigationButtons {

  readonly navButtons: NavButton[] = [
    {label: 'Receitas', route: '/receitas', iconName: 'recipe'},
    {label: 'Cursos', route: '/cursos', iconName: 'monitor'},
    {label: 'E-Books', route: '/e-books', iconName: 'book'}
  ]
}
