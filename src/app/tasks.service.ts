import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private httpClient: HttpClient) {   }

  // getTasks(): Observable<Array<Task>> {

  //   // return 
  // }

}
