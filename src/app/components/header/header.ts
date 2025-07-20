import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
import { SearchBar } from '../search-bar/search-bar';
import { NavigationButtons } from '../navigation-buttons/navigation-buttons';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [Logo, SearchBar, NavigationButtons, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

}
