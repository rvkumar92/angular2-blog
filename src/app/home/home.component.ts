import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Blog } from '../model/model';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  blogs: Blog[];
  constructor(private blogService: BlogService, private changeRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getBlogPost();
  }

  getBlogPost(): void {
    this.blogService.getBlogPosts().subscribe( blogposts => this.blogs = blogposts.data, 
          err => console.log(err) );
    this.changeRef.detectChanges();
  }
}
