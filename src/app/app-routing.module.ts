/*
============================================
; Assignment 8.2 – Server-side Communications
; Author: Dan Ross
; Date: 20 Feb 2021
; Modified By: Dan Ross
; Description: This is the routing module where we can set up our routes.
;===========================================
*/
//These are our import statements.
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//These import statements load the components defined in our routes
import { AboutComponent } from './about/about.component';
import { BookListComponent } from './book-list/book-list.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';
//These are routes which will load the corresponding component based on the URL path.
const routes: Routes = [
  {
    //This is for the URL http://localhost:4200
    path: '',
    component: BookListComponent
  },
  {
    //This is for the URL http://localhost:4200/book-list
    path: 'book-list',
    component: BookListComponent
  },
  {
    //This is for the URL http://localhost:4200/contact
    path: 'contact',
    component: ContactComponent
  },
  {
    //This is for the URL http://localhost:4200/about
    path: 'about',
    component: AboutComponent
  },
  {
    //This is for the URL http://localhost:4200/wishlist
    path: 'wishlist',
    component: WishlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
