import { AuthorService } from './author.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  constructor(authorService : AuthorService) { 
    this.authors = authorService.getAuthors();

  }

  title = "List of Authors";
  authors;

  getTitle(){
    return this.title;
  }


  ngOnInit(): void {
  }

}
