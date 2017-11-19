import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Category } from '../model/model';
import { FormGroup, FormControl } from '@angular/forms';
import { BlogService } from '../blog.service';
import { Router } from '@angular/router';

 @Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddcategoryComponent implements OnInit {
  categoryform: FormGroup;

  constructor(private changeRef: ChangeDetectorRef, private router: Router, private blogService: BlogService) { }

  ngOnInit() {
    this.categoryform = new FormGroup({
      category: new FormControl()
    });
  }

  submitForm(){
    let newCategory : Category;
    if(this.categoryform.value){
      newCategory = this.categoryform.value;
      //this.blogService.getCategories().subscribe( category => newCategory.id = category.length );
      this.blogService.saveCategory(newCategory).subscribe();
      this.changeRef.detectChanges();
      this.router.navigate(['']);
    }
  }

}
