import {Component, OnInit} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-mailer-lite',
  templateUrl: './mailer-lite.component.html',
  styleUrls: ['./mailer-lite.component.scss','./mailer-lite-bootstrap.component.scss']
})

export class MailerLiteComponent implements  OnInit {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');
  constructor(){}
  
  ngOnInit() { }
}