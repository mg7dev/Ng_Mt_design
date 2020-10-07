import {Component, OnInit} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements  OnInit {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');
  constructor(){}
  
  ngOnInit() { }
}