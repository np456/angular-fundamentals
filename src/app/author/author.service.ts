import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }

  getAuthors(){
    // mock data
    // irl, imagine logic here for consuming HTTP service
    // use this logic in multiple places in application
    // unit tests without dependencies on the other
    return ["John", "Jerry", "Jina"];
}
}
