/*
============================================
; Assignment 8.2 – Server-side Communications
; Author: Dan Ross
; Date: 20 Feb 2021
; Modified By: Dan Ross
; Description: This is the book interface file
;===========================================
*/
/* This is the book interface.
This interface contains the isbn, title, number of pages, and authors
*/
export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
