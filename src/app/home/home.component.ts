import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  errMessage: string;
  public TaskResponse : any;

  constructor(private taskService : TaskService) { }

  getTasks(){
    this.taskService.apiCall().subscribe(
      data => this.TaskResponse  = data,
      err => { this.errMessage = 'Http failure response :: 404 Not Found'; }
    );
  }
}
