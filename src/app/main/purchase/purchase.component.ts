import {AfterViewInit, Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})

export class PurchaseComponent implements AfterViewInit {
  displayedColumns: string[] = ['chked','user_id', 'fname', 'lname','phone','email','status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  chked: boolean;
  fname: string;
  user_id: number;
  lname: string;
  phone: string;
  email:string;
  status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { chked: false,user_id: 1, fname: 'Hydrogen', lname: 'H',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 2, fname: 'Helium', lname: 'He',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 3, fname: 'Lithium',lname: 'Li',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 4, fname: 'Beryllium', lname: 'Be',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 5, fname: 'Boron', lname: 'B',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 6, fname: 'Carbon', lname: 'C',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 7, fname: 'Nitrogen', lname: 'N',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 8, fname: 'Oxygen', lname: 'O',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 9, fname: 'Fluorine', lname: 'F',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 10, fname: 'Neon', lname: 'Ne',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 11, fname: 'Sodium', lname: 'Na',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 12, fname: 'Magnesium', lname: 'Mg',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 13, fname: 'Aluminum', lname: 'Al',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 14, fname: 'Silicon', lname: 'Si',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 15, fname: 'Phosphorus', lname: 'P',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 16, fname: 'Sulfur', lname: 'S',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 17, fname: 'Chlorine', lname: 'Cl',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 18, fname: 'Argon', lname: 'Ar',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 19, fname: 'Potassium', lname: 'K',phone:'234234234234',email:'test@mail.com',status:'active'},
  { chked: false,user_id: 20, fname: 'Calcium', lname: 'Ca',phone:'234234234234',email:'test@mail.com',status:'active'},
];