import {Component, OnInit} from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss', './bootstrap.scss']
})

export class ApplicationsComponent implements  OnInit {
  isNextVersion = location.hostname.startsWith('next.material.angular.io');
  filterKey = "name";
  searchIdea : string;
  raitingSort : number = 0;
  constructor(){}

  powerApps = [
    { name : '24 sessions', kind : 'Communication', image : 'Bitmap@1X (3).png', grade : 5, content : '24sessions is the new and better way to meet your leads, prospects and customers.' },
    { name : 'Accelo', kind : 'Project Management', image : 'Bitmap@1X (4).png', grade : 4, content : 'The #1 Service Operations Automation (ServOps) featuring sales, project management.' },
    { name : 'ActiveCampaign', kind : 'CRM', image : 'Bitmap@1X (5).png', grade : 4, content : 'AcitveCampaign is an email marketing, marketing automation, and small business CRM solution for your app.' },
    { name : 'Agile Crm', kind : 'Marketing', image : 'Bitmap@1X (6).png', grade : 4, content : 'Agile CRM is a privately held software-as-a-service (SaaS) company that specializes in CRM software.' },
    { name : 'Asana', kind : 'Productivity', image : 'Bitmap@1X (10).png', grade : 4, content : 'Asana is a web and mobile application designed to help teams track their work.' },
    { name : 'Assembla', kind : 'Team Collaboration', image : 'Bitmap@1X (8).png', grade : 3, content : 'Assembla is a web-based version control and source code management SaaS provider for enterprise.' },
    { name : 'BitBucket', kind : 'Developer tool', image : 'Bitmap@1X (9).png', grade : 3, content : 'Bitbucket is a popular hosted source control system that uses both mercurial and git behind the scenes.' },
    { name : 'Clickup', kind : 'Clickup', image : 'Bitmap@1X (10).png', grade : 3, content : "ClickUp's #1 rated productivity software is making more productive projects." },
    { name : 'Contracta', kind : 'Contract Management', image : 'Bitmap@1X (10).png', grade : 3, content : 'Efficient contract management for modern businesses. Create, sign and store all your contracts.' },
  ]

  panelOpenState = false;
  
  ngOnInit() { 
    this.sortApp();
  }
  
  counter(i: number) {
    return new Array(i);
  }
  
  colorSetting(index, grade){
    if(index >= grade){
      return '';
    }
    else{
      return 'warn';
    }
  }

  sortApp(){
    switch(this.raitingSort){
      case 0:
          this.powerApps.sort(function(a, b){ var x = a.grade; var y = b.grade; return x > y ? -1 : x > y ? 1 : 0 });
          break;
      case 1:
          this.powerApps.sort(function(a, b){ var x = a.name; var y = b.name; return x > y ? -1 : x > y ? 1 : 0 });
          break;
      case 2:
          this.powerApps.sort(function(a, b){ var x = a.kind; var y = b.kind; return x > y ? -1 : x > y ? 1 : 0 });
          break;
    }
    console.log(this.powerApps);
  }
}