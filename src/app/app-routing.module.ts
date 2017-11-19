import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddpostComponent } from './addpost/addpost.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { EditblogComponent } from './editblog/editblog.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'post/add', component: AddpostComponent },
  { path: 'post/:id', component: BlogDetailComponent },
  { path: 'category/add', component: AddcategoryComponent },
  { path: 'post/edit/:id', component: EditblogComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})


export class AppRoutingModule { }
