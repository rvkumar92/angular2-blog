import { Component, OnInit, ViewEncapsulation,Input, ChangeDetectorRef } from '@angular/core';
import { Blog,Category } from '../model/model';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AddpostComponent implements OnInit {
  blogForm: FormGroup;
  categories: Category[];
  blogPosts: Blog[];

  constructor(private router: Router, private blogService: BlogService, private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getCategories();
    this.blogForm = new FormGroup({
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl(),
      articleBody: new FormControl(),
      wordCount: new FormControl(),
      category: new FormControl()
    });
  }

  getCategories(): void {
    this.blogService.getCategories().subscribe(categories => this.categories = categories.data );
  }

  submitForm(){
    console.log(this.blogForm);
    let newPost: Blog;
    if(this.blogForm.value){
      newPost = this.blogForm.value;
      newPost.publishedDate = new Date();
      this.blogService.saveBlogPost(newPost).subscribe();
      this.changeRef.detectChanges();
      this.blogService.getBlogPosts().subscribe(() => this.router.navigate(['']) );
    }
    console.log(newPost);
    this.resetForm();
  }

  resetForm(){
    this.blogForm.reset();
  }
}