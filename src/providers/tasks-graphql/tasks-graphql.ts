import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class TasksGraphqlProvider {

  constructor(
    private http: Http
  ) {}

  getAll(){
    let query: string = `{
      allTasks{
        id
        title
        completed
      }
    }`;
    return this.http.get('http://127.0.0.1:8000/graphql?query='+query)
    .map(response => response.json())
  }

}
