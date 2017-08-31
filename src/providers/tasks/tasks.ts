import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TasksProvider {

  constructor(public http: Http) {
    console.log('Hello TasksProvider Provider');
  }

  getAll(){
    return this.http.get('http://127.0.0.1:8000/api/v1/tasks/')
    .map(response => response.json())
  }

}
