/*
============================================
; Assignment 8.2 – Server-side Communications
; Author: Dan Ross
; Date: 20 Feb 2021
; Modified By: Dan Ross
; Description: This is our books service file
;===========================================
*/
//These are our imports
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { of } from 'rxjs';
// import { map } from 'rxjs/operators';
// import { IBook } from './book.interface';
import { HttpClient, HttpParams } from '@angular/common/http';


//This identifies the class as being injectable.
@Injectable({
  providedIn: 'root'
})
export class BooksService {
  //This is the array of book isbns that we will be using.
  isbns: Array<string> = [
    '0345339681',
    '0261103571',
    '9780593099322',
    '9780261102361',
    '9780261102378',
    //I used a different ISBN from what was specified in the assignment that pulled in more info for Charlotte's Web. The original only pulled in the title.
    '9780061124952',
    '9780316769532',
    '9780743273565',
    '9780590405959'
  ]


  constructor(private http: HttpClient) {
  }

  getBooks() {
    let params = new HttpParams();
    // Use the join function to convert the array of isbns to a comma delimited string.
    params = params.append('bibkeys', `ISBN:${this.isbns.join(',')}`);
    params = params.append('format', 'json');
    params = params.append('jscmd', 'details');
    //Return the http.get function passing in the openlibrary url and the params object.
    return this.http.get('https://openlibrary.org/api/books', { params: params });
  }
}
