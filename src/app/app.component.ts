/*
============================================
; Assignment 8.2 – Server-side Communications
; Author: Dan Ross
; Date: 20 Feb 2021
; Modified By: Dan Ross
; Description: This is the root app component.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//This is the title for our App.
export class AppComponent {
  assignment: string;
  constructor() {
    this.assignment = 'Welcome to In-N-Out-Books'
  }

}
