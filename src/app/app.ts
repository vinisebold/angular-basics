import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Topbar } from './components/topbar/topbar';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Topbar, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meu-primeiro-app');
}
