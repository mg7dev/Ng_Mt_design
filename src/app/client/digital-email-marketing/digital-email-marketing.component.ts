import {Component, OnInit, NgModule} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-digital-email-marketing',
  templateUrl: './digital-email-marketing.component.html',
  styleUrls: ['./digital-email-marketing.component.scss', './bootstrap.scss']
})

export class DigitalEmailMarketingComponent implements  OnInit {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');
  constructor(){}
  
  ngOnInit() { }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Votes'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
  panelOpenState = false;
}