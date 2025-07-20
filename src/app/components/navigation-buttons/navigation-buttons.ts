import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

type NavButton = {
  label : string;
  route: string;
  iconName: string;
}

@Component({
  selector: 'app-navigation-buttons',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navigation-buttons.html',
  styleUrl: './navigation-buttons.css'
})

export class NavigationButtons {

  readonly navButtons: NavButton[] = [
    {label: 'Receitas', route: '/recipes', iconName: 'recipe'},
    {label: 'Cursos', route: '/courses', iconName: 'monitor'},
    {label: 'E-Books', route: '/ebooks', iconName: 'book'}
  ]
}
