import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from 'src/app/shared/routing/app-routing.module';

@Component({
  selector: 'app-checkers-board',
  templateUrl: './checkers-board.component.html',
  styleUrls: ['./checkers-board.component.css']
})
export class CheckersBoardComponent implements OnInit {
  listaTablero = [
    ['V', 'R', 'V', 'R', 'V', 'R', 'V', 'R', 'V', 'R'],
    ['R', 'V', 'R', 'V', 'R', 'V', 'R', 'V', 'R', 'V'],
    ['V', 'R', 'V', 'R', 'V', 'R', 'V', 'R', 'V', 'R'],
    ['V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V'],
    ['V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V'],
    ['V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V'],
    ['V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V', 'V'],
    ['B', 'V', 'B', 'V', 'B', 'V', 'B', 'V', 'B', 'V'],
    ['V', 'B', 'V', 'B', 'V', 'B', 'V', 'B', 'V', 'B'],
    ['B', 'V', 'B', 'V', 'B', 'V', 'B', 'V', 'B', 'V']
  ];

  constructor() {}

  ngOnInit() {}

  click() {
    alert('Hizo click...');
  }
}
