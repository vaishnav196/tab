import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Post } from '../app.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableServiceService } from '../table-service.service';


@Component({
  selector: 'app-post-dailog',
  templateUrl: './post-dailog.component.html',
  styleUrls: ['./post-dailog.component.css'],
})
export class PostDailogComponent {
  form: FormGroup;

  constructor(private tableService:TableServiceService,
    public MatDialogRef: MatDialogRef<PostDailogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Post,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      userId: [data.userId, Validators.required],
      id: [data.id, Validators.required],
      title: [data.title, Validators.required],
      body: [data.body, Validators.required],
    });
  }

  onSubmit(): void {
    // if (this.form.valid) {
    //   const updatedPost: Post = this.form.value;
    //   const fetchedData = JSON.parse(localStorage.getItem('fetchedData') || '[]');
    //   const updatedData = fetchedData.map((post: Post) => {
    //     if (post.id === updatedPost.id) {
    //       return updatedPost;
    //     }
    //     return post;
    //   });
    //   localStorage.setItem('fetchedData', JSON.stringify(updatedData));
    //   this.MatDialogRef.close(updatedPost);
    // }
  }
}
