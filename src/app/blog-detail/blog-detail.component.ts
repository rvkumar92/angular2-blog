import { Component, OnInit,ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../model/model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BlogDetailComponent implements OnInit {
  post: Blog;
  constructor(private changeRef: ChangeDetectorRef, private route: ActivatedRoute, private router: Router, private blogService: BlogService) { }
  ngOnInit() {
        this.getPost();
  }

  getPost(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.blogService.getPostById(id).subscribe( post => this.post = post );
  }

  deletePost(){
    this.blogService.deleteBlogPost(this.post).subscribe(response => console.log(response));
    this.changeRef.detectChanges();
    this.blogService.getBlogPosts().subscribe(() => this.router.navigate(['']) );
  }

}
