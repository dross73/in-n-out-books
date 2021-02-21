/*
============================================
; Assignment 8.2 – Server-side Communications
; Author: Dan Ross
; Date: 20 Feb 2021
; Modified By: Dan Ross
; Description: This is the 'wishlist' component.
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item-interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];
  constructor() { }

  ngOnInit(): void {
  }
  //This will push a new item to our items array.
  updateItemsHandler(item: IWishlistItem) {
    this.items.push(item);
  }

}
