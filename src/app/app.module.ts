import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { HomeComponent } from './home/home.component';
import { AddpostComponent } from './addpost/addpost.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogService } from './blog.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { EditblogComponent } from './editblog/editblog.component';


@NgModule({
  declarations: [
    AppComponent,
    AddcategoryComponent,
    HomeComponent,
    AddpostComponent,
    BlogDetailComponent,
    EditblogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
