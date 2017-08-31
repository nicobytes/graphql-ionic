import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { TasksProvider } from '../../providers/tasks/tasks';

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  tasks: any[] = [];
  
    constructor(
      private navCtrl: NavController,
      private tasksProvider: TasksProvider
    ) {}

  ionViewDidLoad() {
    this.tasksProvider.getAll()
    .subscribe(data =>{
      this.tasks = data;
    });
  }

}
