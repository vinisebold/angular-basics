import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [NgStyle],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  count: number = 0;

  click() {
    this.count++;
  }
}
