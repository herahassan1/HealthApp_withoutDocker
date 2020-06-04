import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
// import { TasksService } from '../tasks.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  errMessage: string;
  public task: Task;
  public tasks: Task[];

  constructor(private httpClient: HttpClient) { }

  getTasks(){
    // this.tasks=JSON.parse(this.json_data)["task"][Math.floor(Math.random() * 2)];
    // console.log(this.tasks);
    this.httpClient.get<any>('assets/db.json',{}).subscribe(data => {
      this.tasks=data["tasks"][Math.floor(Math.random() * 5)]; // 0-4
      // this.tasks=data["tasks"][0];
      // console.log(this.tasks["text"]);
    });
    // this.tasksService.getTasks().subscribe(
    //   data => this.tasks = data,
    //   err => { this.errMessage = 'Http failure response for http://localhost:4200/task: 404 Not Found'; }
    // );
  }
}