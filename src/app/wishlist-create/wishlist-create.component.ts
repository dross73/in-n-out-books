/*
============================================
; Assignment 8.2 – Server-side Communications
; Author: Dan Ross
; Date: 20 Feb 2021
; Modified By: Dan Ross
; Description: This is the 'wishlist-create' component.
;===========================================
*/
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IWishlistItem } from '../wishlist-item-interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.css']
})
export class WishlistCreateComponent implements OnInit {
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  constructor() {
    //Here we instantiate a new IWishlist item. We're casting this object literal to the object type 'IWishlistItem.'
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {
  }

  //We're going to call this function every time a user tries to add a wishlist item and those items will be emitted to the wishlist component.
  addItem() {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors

    })
    // This will reset this.item to a new empty object literal.
    this.item = {} as IWishlistItem;
  }
}
