import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog, Category } from '../model/model';
import { BlogService } from '../blog.service'; 
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditblogComponent implements OnInit {
  post: Blog;
  blogForm: FormGroup;
  categories: Category[];

  constructor(private blogService: BlogService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getBlogById();
    this.getCategories();
  }

  getBlogById(){
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.getPostById(id).subscribe( post => {this.post = post
      this.blogForm = new FormGroup({
        title: new FormControl(this.post.title),
        author: new FormControl(this.post.author),
        description: new FormControl(this.post.description),
        articleBody: new FormControl(this.post.articleBody),
        wordCount: new FormControl(this.post.wordCount),
        category: new FormControl(this.post.category)
      });  
    } );
  }

  getCategories(): void {
    this.blogService.getCategories().subscribe(categories => this.categories = categories);
  }

  getSelectedCategory(category, post){
    console.log((category.category == post.category)? post.category : '')
    return (category.category == post.category)? true : false;
  }

  updateBlog(){
    if(this.blogForm.value){
      let editPost = this.post;
      editPost = Object.assign(editPost, this.blogForm.value);
      this.blogService.updateBlogPost(editPost).subscribe();
      this.blogService.getBlogPosts().subscribe(() => this.router.navigate([`/post/${editPost._id}`]) );
    }
  }

}
