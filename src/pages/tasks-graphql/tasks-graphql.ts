import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { TasksGraphqlProvider } from '../../providers/tasks-graphql/tasks-graphql';

@IonicPage()
@Component({
  selector: 'page-tasks-graphql',
  templateUrl: 'tasks-graphql.html',
})
export class TasksGraphqlPage {

  tasks: any[] = [];

  constructor(
    private navCtrl: NavController,
    private tasksProvider: TasksGraphqlProvider
  ) {}

  ionViewDidLoad() {
    this.tasksProvider.getAll()
    .subscribe(response =>{
      this.tasks = response.data.allTasks;
    });
  }

}
