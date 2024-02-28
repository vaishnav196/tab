import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { TableServiceService } from './table-service.service';
 import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

// import { DataSource } from '@angular/cdk/collections';
import { PostDailogComponent } from './post-dailog/post-dailog.component';
export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  btn:string 
}

const post: Post[] = [];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 ngOnInit(): void {
  // this.data()
  const fetchedData = JSON.parse(localStorage.getItem('fetchedData') || '[]');
  this.dataSource = fetchedData;
 }

  constructor(private http:HttpClient,private tableService:TableServiceService,private dialog:MatDialog){}
  dataSource:Post[]=[];

  displayedColumns: string[] = ['userId','id', 'title','body','btn'];
data(){
  // this.tableService.getData().subscribe((newdata)=>{
  //   localStorage.setItem('fetchedData',JSON.stringify(newdata))
  //   this.dataSource=newdata;
  // });

  // this.dataSource=JSON.parse(localStorage.getItem('fetchedData') || '{}')
}
openDialog(post: Post) {
  console.log(post);
  const dialogRef = this.dialog.open(PostDailogComponent, {
    width: '250px',
    data: post,
  });

  // dialogRef.afterClosed().subscribe(result => {
  //   if (result) {
  //     const index = this.dataSource.findIndex(p => p.id === result.id);
  //     if (index !== -1) {
  //       this.dataSource[index] = result;
  //       localStorage.setItem('fetchedData', JSON.stringify(this.dataSource));
  //     }
  //   }
  // });

}
}
