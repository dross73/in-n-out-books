/*
============================================
; Assignment 8.2 – Server-side Communications
; Author: Dan Ross
; Date: 20 Feb 2021
; Modified By: Dan Ross
; Description: This is the 'book-details-dialog' component.
;===========================================
*/
//These are our imports
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { IBook } from '../book.interface';

@Component({
  selector: 'app-book-details-dialog',
  templateUrl: './book-details-dialog.component.html',
  styleUrls: ['./book-details-dialog.component.css']
})
export class BookDetailsDialogComponent implements OnInit {

  book: IBook;
  //This will create a material dialog box with the details of the chosen book.
  constructor(private dialogRef: MatDialogRef<BookDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.book = data.book;
  }

  ngOnInit(): void {
  }

}
