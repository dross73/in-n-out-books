/*
============================================
; Assignment 8.2 – Server-side Communications
; Author: Dan Ross
; Date: 20 Feb 2021
; Modified By: Dan Ross
; Description: This is the 'book-list' component.
;===========================================
*/
import { Component, OnInit } from '@angular/core';
import { IBook } from '../book.interface';
// import { Observable } from 'rxjs';
import { BooksService } from '../books.service';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
// This is the BookListComponent class
export class BookListComponent implements OnInit {
  //Field properties
  books: Array<IBook> = [];

  //This variable is so that when a user selects a book, it's mapped to a book object.
  book: IBook;

  //Here we use dependency injection to access Book Service.
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe(res => {
      console.log(res);
      //Loop over the response data object using a for...in loop and check if the res.hasOwnProperty(key) is true.
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function(author) {
              return author.name;
            })
          }
          //Push a new object to the books array.
          this.books.push({
            isbn: res[key].details.isbn_13 ? res[key].details.isbn_13 : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle ? res[key].details.subtitle : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors
          })
        }
      }
    })
  }

  ngOnInit(): void {
  }
  showBookDetails(isbn: string) {
    // Here we're using JavaScript's built-in find function to search the books array and return the matching book object.
    this.book = this.books.find(book => book.isbn === isbn);
    //This will open a material dialog box with the details of the chosen book.
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      disableClose: true,
      width: '800px'
    });

    console.log(this.book);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}
