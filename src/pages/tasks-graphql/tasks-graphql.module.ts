import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TasksGraphqlPage } from './tasks-graphql';

@NgModule({
  declarations: [
    TasksGraphqlPage,
  ],
  imports: [
    IonicPageModule.forChild(TasksGraphqlPage),
  ],
  exports: [
    TasksGraphqlPage
  ]
})
export class TasksGraphqlPageModule {}
