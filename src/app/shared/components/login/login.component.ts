import {Component, OnInit, NgModule} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './bootstrap.scss']
})

export class LoginComponent implements  OnInit {

  isNextVersion = location.hostname.startsWith('next.material.angular.io');
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(){}
  
  ngOnInit() { }
}