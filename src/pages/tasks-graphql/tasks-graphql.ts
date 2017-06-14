import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TasksGraphqlProvider } from '../../providers/tasks-graphql/tasks-graphql';

@IonicPage()
@Component({
  selector: 'page-tasks-graphql',
  templateUrl: 'tasks-graphql.html',
})
export class TasksGraphqlPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private tasksProvider: TasksGraphqlProvider
  ) {
  }

  ionViewDidLoad() {
    this.tasksProvider.getAll()
    .subscribe(data =>{
      console.log(data);
    });
  }

}
