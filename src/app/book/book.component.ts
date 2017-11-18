import { Component, OnInit } from '@angular/core';
import { books } from './../data/books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: Array<any> = books;  

  constructor() { }

  ngOnInit() {
  }
}
