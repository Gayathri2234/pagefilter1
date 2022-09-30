import { AfterViewInit ,Component,ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
  @Component({
    selector:"app-root",
    templateUrl:"./app.component.html",
    styleUrls:["./app.component.css"]
  })
export class AppComponent implements AfterViewInit  {
  displayedColumns = ['no', 'name', 'percentage', 'grade'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); 
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
  @ViewChild(MatPaginator,{static:true}) paginator: MatPaginator;
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface studentdata {
  no:number
  name: string;
  percentage: number;
  grade: string;
}

const ELEMENT_DATA: studentdata[] = [
  {no:1,name:'Priya',percentage:95,grade:"A+"},
  {no:2,name:'Akhila',percentage:98,grade:"A+"},
  {no:3,name:'Durga',percentage:80,grade:"B"},
  {no:4,name:'Haritha',percentage:85,grade:"A"},
  {no:5,name:'Asritha',percentage:75,grade:"B"},
  {no:6,name:'Harsha',percentage:83,grade:"A"},
  {no:7,name:'Swarna',percentage:67,grade:"C"},
  {no:8,name:'Tanmaye',percentage:69,grade:"C"},
  {no:9,name:'Gayathri',percentage:85,grade:"A"},
  {no:10,name:'Teju',percentage:91,grade:"A+"},
  {no:11,name:'Lily',percentage:50,grade:"D"},
  {no:12,name:'Prasanthi',percentage:63,grade:"C"},
  {no:13,name:'Ramya',percentage:58,grade:"D"},
  {no:14,name:'Harshitha',percentage:78,grade:"B"},
  {no:15,name:'Mounika',percentage:65,grade:"D"},
  {no:16,name:'vanya',percentage:40,grade:"E"},
  {no:17,name:'sindhu',percentage:68,grade:"D"},
  {no:18,name:'sowjanya',percentage:85,grade:"A"},
  {no:19,name:'Kerthi',percentage:45,grade:"D"},
  {no:19,name:'pavani',percentage:55,grade:"D"}];


