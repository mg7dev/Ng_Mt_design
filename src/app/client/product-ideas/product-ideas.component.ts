import {Component, OnInit, NgModule} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-product-ideas',
  templateUrl: './product-ideas.component.html',
  styleUrls: ['./product-ideas.component.scss']
})

export class ProductIdeasComponent implements  OnInit {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');
  filterKey = "name";
  constructor(){}
  
  new_production = true;
  datas = [
    {value: '0', viewValue: 'Category-1'},
    {value: '1', viewValue: 'Category-2'},
    {value: '2', viewValue: 'Category-3'}
  ];
  productions = [
    {name: 'Email Marketing', idea: '8 ideas'},
    {name: 'Digital Email Marketing', idea: '4 ideas'},
    {name: 'Client Based Email Marketing2', idea: '2 ideas'},
    {name: 'Email Marketing', idea: '8 ideas'},
    {name: 'Digital Email Marketing', idea: '4 ideas'},
    {name: 'Client Based Email Marketing2', idea: '2 ideas'},
  ];
  searchProduction : string;
  ngOnInit() { }
}