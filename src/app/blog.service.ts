import { Injectable } from '@angular/core';
import { Blog,Category } from './model/model';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import  'rxjs/add/operator/map';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class BlogService {
  private categoryUrl = 'http://localhost:3030/category';
  private blogsUrl = 'http://localhost:3030/blogs';
  constructor(private http: HttpClient) { }

  getBlogPosts(): Observable<any> {
    const url = "/blogs";
    return this.http.get(`${this.blogsUrl}`);
  }

  getPostById(id: any): Observable<Blog> {
    const url = `${this.blogsUrl}/${id}`;
    return this.http.get<Blog>(url);
  }

  saveBlogPost(blog: Blog): Observable<Blog> {
    return this.http.post<Blog>(this.blogsUrl, blog, httpOptions);
  }

  getCategories(): Observable<any> {
    return this.http.get(this.categoryUrl);
  }
  deleteBlogPost(post: any): Observable<Blog>{
    const url = `${this.blogsUrl}/${post._id}`;
    return this.http.delete<Blog>(url, httpOptions);
  }

  saveCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.categoryUrl, category, httpOptions);
  }

  updateBlogPost(updatePost){
    const url = `${this.blogsUrl}/${updatePost._id}`
    console.log(url);
    console.log(updatePost);
    return this.http.put(url, updatePost, httpOptions);
  }
}
