import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RemoteProvider {

  constructor(public http: HttpClient) {
    console.log('Hello RemoteProvider Provider');
  }
  getMovies(mySearch: string):Observable<any>{
    return this.http.get('http://www.omdbapi.com/?apikey=2ee2ed84&s='+mySearch);//use this link aswell as whatever was searched
  }

}
